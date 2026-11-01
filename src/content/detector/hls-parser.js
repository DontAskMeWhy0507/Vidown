// Module 24 [detector] - Savior YouTube Player AST Decryptor and Stream Verifier
export default function(module, exports, require) {
  "use strict";

  require.d(exports, "a", () => YouTubePlayerDecryptor);
  require.d(exports, "b", () => verifySampleMediaUrls);

  var utils = require(0);
  var mediaConstants = require(1);
  var scriptParser = require(37);

  var WALK_STOP = Symbol("WALK_STOP");
  var SAFE_BUILTIN_GLOBALS = new Set([
    "AbortController", "AbortSignal", "Array", "ArrayBuffer", "AsyncContext", "Atomics",
    "AudioContext", "BigInt", "BigInt64Array", "BigUint64Array", "Blob", "Boolean",
    "BroadcastChannel", "Buffer", "CanvasRenderingContext2D", "clearImmediate", "clearInterval",
    "clearTimeout", "confirm", "console", "Crypto", "CustomEvent", "DataView", "Date",
    "decodeURI", "decodeURIComponent", "document", "Element", "encodeURI", "encodeURIComponent",
    "Error", "escape", "eval", "Event", "EventTarget", "fetch", "File", "FileReader",
    "Float32Array", "Float64Array", "FormData", "function", "global", "globalThis",
    "hasOwnProperty", "Headers", "History", "HTMLElement", "HTMLCollection", "IDBKeyRange",
    "Infinity", "Int16Array", "Int32Array", "Int8Array", "Intl", "IntersectionObserver",
    "isFinite", "isNaN", "isPrototypeOf", "JSON", "location", "log", "Map", "Math",
    "MediaRecorder", "MediaSource", "MediaStream", "MemberExpression", "MutationObserver",
    "NaN", "navigator", "Node", "NodeList", "Number", "Object", "OfflineAudioContext",
    "parse", "parseFloat", "parseInt", "Performance", "Promise", "Proxy", "RangeError",
    "ReferenceError", "Reflect", "RegExp", "requestAnimationFrame", "Request", "Response",
    "Set", "setImmediate", "setInterval", "setTimeout", "SharedArrayBuffer", "String",
    "Symbol", "SyntaxError", "TypeError", "Uint16Array", "Uint32Array", "Uint8Array",
    "Uint8ClampedArray", "undefined", "unescape", "URIError", "URL", "URLSearchParams",
    "WeakMap", "WeakSet", "WebAssembly", "WebSocket", "window", "Worker", "XMLHttpRequest"
  ]);

  function walkAst(rootNode, visitorOptions) {
    if (!rootNode || typeof rootNode !== "object") return;
    var traversalStack = [{ node: rootNode, parent: null, exit: false }];
    var nodePathAncestors = [];
    var enterVisitor = typeof visitorOptions === "function" ? visitorOptions : (visitorOptions?.enter ?? null);
    var leaveVisitor = typeof visitorOptions === "function" ? null : (visitorOptions?.leave ?? null);
    var isTraversalStopped = false;

    while (!isTraversalStopped && traversalStack.length > 0) {
      var currentStackItem = traversalStack.pop();
      var currentNode = currentStackItem.node;
      var parentNode = currentStackItem.parent;

      if (currentStackItem.exit) {
        nodePathAncestors.pop();
        if (leaveVisitor && leaveVisitor(currentNode, parentNode, nodePathAncestors) === WALK_STOP) {
          isTraversalStopped = true;
        }
      } else if (currentNode && typeof currentNode.type === "string") {
        var enterResult = enterVisitor ? enterVisitor(currentNode, parentNode, nodePathAncestors) : undefined;
        if (enterResult === WALK_STOP) {
          isTraversalStopped = true;
        } else if (enterResult !== true) {
          traversalStack.push({ node: currentNode, parent: parentNode, exit: true });
          nodePathAncestors.push(currentNode);
          for (var propertyKey in currentNode) {
            if (
              propertyKey !== "loc" &&
              propertyKey !== "range" &&
              propertyKey !== "start" &&
              propertyKey !== "end" &&
              Object.prototype.hasOwnProperty.call(currentNode, propertyKey)
            ) {
              var propertyValue = currentNode[propertyKey];
              if (propertyValue) {
                if (Array.isArray(propertyValue)) {
                  for (var arrayIndex = propertyValue.length - 1; arrayIndex >= 0; arrayIndex--) {
                    var childElement = propertyValue[arrayIndex];
                    if (childElement && typeof childElement.type === "string") {
                      traversalStack.push({ node: childElement, parent: currentNode, exit: false });
                    }
                  }
                } else if (typeof propertyValue === "object" && typeof propertyValue.type === "string") {
                  traversalStack.push({ node: propertyValue, parent: currentNode, exit: false });
                }
              }
            }
          }
        }
      }
    }
  }

  function getNodeSource(astNode, sourceText) {
    var rangeBounds = astNode
      ? Array.isArray(astNode.range)
        ? astNode.range
        : typeof astNode.start === "number" && typeof astNode.end === "number"
        ? [astNode.start, astNode.end]
        : null
      : null;
    return rangeBounds ? sourceText.slice(rangeBounds[0], rangeBounds[1]) : null;
  }

  function resolveMemberExpressionName(memberNode, sourceText) {
    if (memberNode.type !== "MemberExpression") return null;
    var propertySegments = [];
    var currentMember = memberNode;
    while (currentMember && currentMember.type === "MemberExpression") {
      var propertyNode = currentMember.property;
      if (!propertyNode) return null;
      if (currentMember.computed) {
        var computedSnippet = getNodeSource(propertyNode, sourceText);
        if (!computedSnippet) return null;
        propertySegments.unshift("[" + computedSnippet.trim() + "]");
      } else {
        if (propertyNode.type !== "Identifier") return null;
        propertySegments.unshift("." + propertyNode.name);
      }
      currentMember = currentMember.object;
    }
    var baseRootIdentifier = null;
    if (currentMember?.type === "Identifier") {
      baseRootIdentifier = currentMember.name;
    } else if (currentMember?.type === "ThisExpression") {
      baseRootIdentifier = "this";
    }
    return baseRootIdentifier ? baseRootIdentifier + propertySegments.join("") : null;
  }

  function findRootMemberObjectName(memberNode, sourceText) {
    var currentObject = memberNode.object;
    while (currentObject && currentObject.type === "MemberExpression") {
      var resolvedSubName = resolveMemberExpressionName(currentObject, sourceText);
      if (resolvedSubName) return resolvedSubName;
      currentObject = currentObject.object;
    }
    return currentObject?.type === "Identifier"
      ? currentObject.name
      : currentObject?.type === "ThisExpression"
      ? "this"
      : null;
  }

  function createWrapperFunction(analyzerInstance, exportName, targetNode) {
    if (
      targetNode.type === "CallExpression" &&
      targetNode.callee.type === "Identifier" &&
      analyzerInstance.declaredVariables.has(targetNode.callee.name)
    ) {
      return formatFunctionDefinition(
        exportName,
        targetNode.callee.name,
        extractParameterNames(analyzerInstance, targetNode.arguments)
      );
    }
    if (
      targetNode.type === "VariableDeclarator" &&
      targetNode.init?.type === "FunctionExpression" &&
      targetNode.id.type === "Identifier"
    ) {
      return formatFunctionDefinition(
        exportName,
        targetNode.id.name,
        extractParameterNames(analyzerInstance, targetNode.init.params)
      );
    }
    if (
      targetNode.type === "NewExpression" &&
      targetNode.callee.type === "MemberExpression" &&
      targetNode.callee.object.type === "Identifier"
    ) {
      var memberCalleeName = resolveMemberExpressionName(targetNode.callee, analyzerInstance.getSource());
      if (!memberCalleeName) return;
      return formatFunctionDefinition(
        exportName,
        memberCalleeName,
        extractParameterNames(analyzerInstance, targetNode.arguments),
        true
      );
    }
  }

  function formatFunctionDefinition(wrapperName, calleeName, parameterList, isConstructor = false) {
    var parameterString = parameterList.join(", ");
    return [
      "  function " + wrapperName + "(" + parameterString + ") {",
      "    return " + (isConstructor ? "new " : "") + calleeName + "(" + parameterString + ");",
      "  }"
    ].join("\n");
  }

  function extractParameterNames(analyzerInstance, parameterNodes) {
    var extractedNames = [];
    for (var parameterItem of parameterNodes) {
      if (parameterItem.type === "Identifier" && analyzerInstance.declaredVariables.has(parameterItem.name)) {
        extractedNames.push(parameterItem.name);
      } else if (
        parameterItem.type !== "Literal" ||
        (typeof parameterItem.value !== "string" && typeof parameterItem.value !== "number")
      ) {
        if (parameterItem.type === "UnaryExpression") {
          var unarySnippet = getNodeSource(parameterItem, analyzerInstance.getSource());
          if (unarySnippet) extractedNames.push(unarySnippet.trim());
        } else if (parameterItem.type === "AssignmentPattern" && parameterItem.left.type === "Identifier") {
          extractedNames.push(parameterItem.left.name);
        } else if (parameterItem.type === "Identifier") {
          extractedNames.push(parameterItem.name);
        } else if (!extractedNames.includes("input")) {
          extractedNames.push("input");
        }
      } else {
        extractedNames.push(JSON.stringify(parameterItem.value));
      }
    }
    return extractedNames;
  }

  class YouTubePlayerAstAnalyzer {
    constructor(sourceScript, analyzerOptions = {}) {
      this.dependentsTracker = new Map();
      this.pendingPrototypeAliasBinding = null;
      this.iifeParamName = null;
      this.declaredVariables = new Map();
      this.source = sourceScript;
      var rawExtractions = analyzerOptions.extractions
        ? Array.isArray(analyzerOptions.extractions)
          ? analyzerOptions.extractions
          : [analyzerOptions.extractions]
        : [];
      this.extractionStates = rawExtractions.map((extractionConfig) => ({
        config: Object.assign({ collectDependencies: true, stopWhenReady: true }, extractionConfig),
        dependencies: new Set(),
        dependents: new Set(),
        ready: false
      }));
      this.hasExtractions = this.extractionStates.length > 0;
      this.programAst = scriptParser.parseScript(sourceScript, { ranges: true, loc: false, module: false });
      this.analyzeAst();
    }

    analyzeAst() {
      var iifeBodyBlock;
      for (var statementNode of this.programAst.body) {
        if (statementNode.type === "ExpressionStatement" && statementNode.expression.type === "CallExpression") {
          var outerCall = statementNode.expression;
          if (outerCall.callee.type === "FunctionExpression") {
            var iifeCallee = outerCall.callee;
            var firstParam = iifeCallee.params.length > 0 ? iifeCallee.params[0] : null;
            if (!this.iifeParamName && firstParam?.type === "Identifier") {
              this.iifeParamName = firstParam.name;
            }
            if (iifeCallee.body?.type === "BlockStatement") {
              iifeBodyBlock = iifeCallee.body;
              break;
            }
          }
        }
      }

      if (iifeBodyBlock) {
        for (var blockStatement of iifeBodyBlock.body) {
          switch (blockStatement.type) {
            case "ExpressionStatement": {
              var expr = blockStatement.expression;
              if (expr.type !== "AssignmentExpression") continue;
              var leftTarget = expr.left;
              var rightValue = expr.right;

              if (
                rightValue.type === "MemberExpression" &&
                !rightValue.computed &&
                rightValue.property.type === "Identifier" &&
                rightValue.property.name === "prototype"
              ) {
                var prototypeName = resolveMemberExpressionName(rightValue, this.source);
                var assignedAlias =
                  leftTarget.type === "Identifier"
                    ? leftTarget.name
                    : resolveMemberExpressionName(leftTarget, this.source);
                if (prototypeName) {
                  var targetVar = this.declaredVariables.get(prototypeName.replace(".prototype", ""));
                  if (assignedAlias && targetVar) {
                    var aliasSet = new Set();
                    var aliasPrefix = assignedAlias + ".";
                    this.pendingPrototypeAliasBinding = [aliasPrefix, targetVar];
                    targetVar.prototypeAliases.set(aliasPrefix, aliasSet);
                  }
                }
              }

              if (leftTarget.type === "Identifier") {
                var foundVar = this.declaredVariables.get(leftTarget.name);
                if (!foundVar) continue;
                foundVar.node.init = rightValue;
                if (this.needsDependencyAnalysis(rightValue)) {
                  foundVar.dependencies = this.findDependencies(expr.right, leftTarget.name);
                }
                if (this.onMatch(foundVar.node, foundVar)) return;
              } else if (leftTarget.type === "MemberExpression") {
                var memberResolvedName = resolveMemberExpressionName(leftTarget, this.source);
                var pendingPrefix = this.pendingPrototypeAliasBinding?.[0];
                if (
                  pendingPrefix &&
                  (memberResolvedName?.includes(pendingPrefix) ||
                    memberResolvedName === pendingPrefix.slice(0, -1))
                ) {
                  var boundTarget = this.declaredVariables.get(this.pendingPrototypeAliasBinding?.[1].name || "");
                  if (boundTarget) {
                    var aliasMapEntry = boundTarget.prototypeAliases.get(pendingPrefix);
                    var aliasDescriptor = {
                      name: memberResolvedName,
                      node: blockStatement,
                      dependents: this.dependentsTracker.get(memberResolvedName) || new Set(),
                      predeclared: false,
                      prototypeAliases: new Map(),
                      dependencies: this.findDependencies(rightValue, memberResolvedName)
                    };
                    if (aliasMapEntry) {
                      aliasMapEntry.add(aliasDescriptor);
                    } else {
                      boundTarget.prototypeAliases.set(pendingPrefix, new Set([aliasDescriptor]));
                    }
                  }
                } else {
                  this.pendingPrototypeAliasBinding = null;
                }

                if (!memberResolvedName || this.declaredVariables.has(memberResolvedName)) continue;
                var memberDescriptor = {
                  name: memberResolvedName,
                  node: blockStatement,
                  dependents: this.dependentsTracker.get(memberResolvedName) || new Set(),
                  predeclared: false,
                  prototypeAliases: new Map(),
                  dependencies: this.findDependencies(rightValue, memberResolvedName)
                };
                var rootObjectName = findRootMemberObjectName(leftTarget, this.source);
                if (
                  rootObjectName &&
                  rootObjectName !== memberResolvedName &&
                  !rootObjectName.startsWith("this.")
                ) {
                  memberDescriptor.dependencies.add(rootObjectName.replace(".prototype", ""));
                }
                if (this.dependentsTracker.has(memberResolvedName)) {
                  this.dependentsTracker.delete(memberResolvedName);
                }
                this.declaredVariables.set(memberResolvedName, memberDescriptor);
                if (this.onMatch(blockStatement, memberDescriptor)) return;
              }
              break;
            }
            case "VariableDeclaration": {
              this.pendingPrototypeAliasBinding = null;
              for (var declaratorNode of blockStatement.declarations) {
                if (declaratorNode.id.type === "Identifier") {
                  var declaratorRecord = {
                    name: declaratorNode.id.name,
                    node: declaratorNode,
                    dependents: this.dependentsTracker.get(declaratorNode.id.name) || new Set(),
                    prototypeAliases: new Map(),
                    dependencies: new Set(),
                    predeclared: false
                  };
                  var initExpr = declaratorNode.init;
                  if (initExpr || blockStatement.kind !== "var") {
                    if (initExpr && this.needsDependencyAnalysis(initExpr)) {
                      declaratorRecord.dependencies = this.findDependencies(initExpr, declaratorRecord.name);
                    }
                  } else {
                    declaratorRecord.predeclared = true;
                  }
                  if (this.dependentsTracker.has(declaratorRecord.name)) {
                    this.dependentsTracker.delete(declaratorRecord.name);
                  }
                  this.declaredVariables.set(declaratorRecord.name, declaratorRecord);
                  if (this.onMatch(declaratorNode, declaratorRecord)) return;
                }
              }
              break;
            }
          }
        }
      }
    }

    needsDependencyAnalysis(astNode) {
      if (!astNode) return false;
      switch (astNode.type) {
        case "FunctionExpression":
        case "ArrowFunctionExpression":
        case "ArrayExpression":
        case "LogicalExpression":
        case "CallExpression":
        case "NewExpression":
        case "MemberExpression":
        case "BinaryExpression":
        case "ConditionalExpression":
        case "ObjectExpression":
        case "SequenceExpression":
        case "ClassExpression":
        case "Identifier":
          return true;
        default:
          return false;
      }
    }

    onMatch(candidateNode, variableMetadata) {
      if (!this.hasExtractions) return false;
      for (var extractionState of this.extractionStates) {
        if (extractionState.node) {
          if (extractionState.node !== candidateNode) {
            this.refreshExtractionState(extractionState);
            if (this.shouldStopTraversal()) return true;
          }
        } else {
          if (candidateNode.type === "VariableDeclarator" && !candidateNode.init) continue;
          var matchResult = extractionState.config.match(candidateNode);
          if (!matchResult) continue;
          extractionState.node = candidateNode;
          if (variableMetadata) {
            extractionState.metadata = variableMetadata;
            extractionState.dependents = variableMetadata.dependents;
            extractionState.dependencies = variableMetadata.dependencies;
            if (typeof matchResult !== "boolean") {
              extractionState.matchContext = matchResult;
            }
          }
          this.refreshExtractionState(extractionState);
        }
      }
      return this.shouldStopTraversal();
    }

    refreshExtractionState(extractionState) {
      if (!extractionState.node) {
        extractionState.ready = false;
      } else if (extractionState.config.collectDependencies !== false) {
        extractionState.ready = extractionState.metadata
          ? this.areDependenciesResolved(extractionState.dependencies)
          : false;
      } else {
        extractionState.ready = true;
      }
    }

    shouldStopTraversal() {
      if (!this.hasExtractions) return false;
      var hasAnyStopConfig = false;
      for (var extractionState of this.extractionStates) {
        if (extractionState.config.stopWhenReady !== false) {
          hasAnyStopConfig = true;
          if (!extractionState.node || !extractionState.ready) return false;
        }
      }
      return hasAnyStopConfig;
    }

    areDependenciesResolved(dependencySet, visitedSet = new Set()) {
      if (!dependencySet || dependencySet.size === 0) return true;
      for (var dependencyName of dependencySet) {
        if (
          dependencyName &&
          !SAFE_BUILTIN_GLOBALS.has(dependencyName) &&
          dependencyName !== this.iifeParamName &&
          !visitedSet.has(dependencyName)
        ) {
          var foundVariable = this.declaredVariables.get(dependencyName);
          if (!foundVariable) return false;
          visitedSet.add(dependencyName);
          if (!this.areDependenciesResolved(foundVariable.dependencies, visitedSet)) return false;
        }
      }
      return true;
    }

    findDependencies(rootNode, contextIdentifier) {
      var foundDependencies = new Set();
      if (!rootNode) return foundDependencies;
      var scopeStack = [{ names: new Set(), type: "block" }];
      var getCurrentScope = () => scopeStack[scopeStack.length - 1];
      var isDeclaredInScope = (identifierName) => {
        for (var scopeIndex = scopeStack.length - 1; scopeIndex >= 0; scopeIndex--) {
          if (scopeStack[scopeIndex].names.has(identifierName)) return true;
        }
        return false;
      };
      var targetNodeId = "id" in rootNode && rootNode.id?.type === "Identifier" ? rootNode.id.name : undefined;

      var collectPatternBindings = (patternNode, destinationSet) => {
        if (!patternNode) return;
        switch (patternNode.type) {
          case "Identifier":
            destinationSet.add(patternNode.name);
            break;
          case "ObjectPattern":
            for (var prop of patternNode.properties) {
              if (prop.type === "RestElement") {
                collectPatternBindings(prop.argument, destinationSet);
              } else if (prop.type === "Property") {
                collectPatternBindings(prop.value, destinationSet);
              }
            }
            break;
          case "ArrayPattern":
            for (var elem of patternNode.elements) {
              if (elem) collectPatternBindings(elem, destinationSet);
            }
            break;
          case "RestElement":
            collectPatternBindings(patternNode.argument, destinationSet);
            break;
          case "AssignmentPattern":
            collectPatternBindings(patternNode.left, destinationSet);
            break;
        }
      };

      walkAst(rootNode, {
        enter: (currentNode, parentAstNode) => {
          switch (currentNode.type) {
            case "FunctionDeclaration":
            case "FunctionExpression":
            case "ArrowFunctionExpression": {
              var isDecl = currentNode.type === "FunctionDeclaration";
              var functionId = "id" in currentNode ? currentNode.id?.name : undefined;
              if (isDecl && functionId) {
                getCurrentScope().names.add(functionId);
              }
              var functionScope = { names: new Set(), type: "function" };
              if (currentNode.type === "FunctionExpression" && functionId) {
                functionScope.names.add(functionId);
              }
              if (currentNode.params) {
                for (var paramItem of currentNode.params) {
                  collectPatternBindings(paramItem, functionScope.names);
                }
              }
              scopeStack.push(functionScope);
              break;
            }
            case "BlockStatement":
              scopeStack.push({ names: new Set(), type: "block" });
              break;
            case "CatchClause": {
              var catchScopeNames = new Set();
              if (currentNode.param) {
                collectPatternBindings(currentNode.param, catchScopeNames);
              }
              scopeStack.push({ names: catchScopeNames, type: "block" });
              break;
            }
            case "VariableDeclaration": {
              var targetScope =
                currentNode.kind === "var"
                  ? scopeStack.slice().reverse().find((item) => item.type === "function") ?? getCurrentScope()
                  : getCurrentScope();
              for (var variableDeclarator of currentNode.declarations) {
                collectPatternBindings(variableDeclarator.id, targetScope.names);
              }
              break;
            }
            case "ClassDeclaration":
              if (currentNode.id?.name) {
                getCurrentScope().names.add(currentNode.id.name);
              }
              break;
            case "LabeledStatement":
              if (currentNode.label?.type === "Identifier") {
                getCurrentScope().names.add(currentNode.label.name);
              }
              break;
            case "Identifier": {
              if (currentNode.name === targetNodeId) return;
              if (parentAstNode?.type === "Property" && parentAstNode.key === currentNode && !parentAstNode.computed) return;
              if (parentAstNode?.type === "MethodDefinition" && parentAstNode.key === currentNode && !parentAstNode.computed) return;
              if (parentAstNode?.type === "MemberExpression" && parentAstNode.property === currentNode && !parentAstNode.computed) {
                if (parentAstNode.object.type === "ThisExpression") return;
                var resolvedMember = resolveMemberExpressionName(parentAstNode, this.source);
                if (!resolvedMember) return;
                var foundMemberVar = this.declaredVariables.get(resolvedMember);
                if (foundMemberVar) {
                  foundMemberVar.dependents.add(contextIdentifier);
                  foundDependencies.add(resolvedMember);
                } else if (parentAstNode.object.type === "Identifier") {
                  var objectName = parentAstNode.object.name;
                  var foundObjectVar = this.declaredVariables.get(objectName);
                  if (
                    (foundObjectVar || objectName === this.iifeParamName) &&
                    !isDeclaredInScope(objectName) &&
                    !SAFE_BUILTIN_GLOBALS.has(objectName)
                  ) {
                    foundObjectVar?.dependents.add(contextIdentifier);
                    foundDependencies.add(resolvedMember);
                    var trackerSet = this.dependentsTracker.get(resolvedMember);
                    if (trackerSet) {
                      trackerSet.add(contextIdentifier);
                    } else {
                      this.dependentsTracker.set(resolvedMember, new Set([contextIdentifier]));
                    }
                  }
                }
                return;
              }
              if (parentAstNode?.type === "MetaProperty") return;
              if (isDeclaredInScope(currentNode.name) || SAFE_BUILTIN_GLOBALS.has(currentNode.name)) return;
              foundDependencies.add(currentNode.name);
              var directlyFoundVar = this.declaredVariables.get(currentNode.name);
              if (directlyFoundVar) {
                directlyFoundVar.dependents.add(contextIdentifier);
              } else {
                var directTracker = this.dependentsTracker.get(currentNode.name);
                if (directTracker) {
                  directTracker.add(contextIdentifier);
                } else {
                  this.dependentsTracker.set(currentNode.name, new Set([contextIdentifier]));
                }
              }
              break;
            }
            case "ForStatement":
            case "ForInStatement":
            case "ForOfStatement":
              scopeStack.push({ names: new Set(), type: "block" });
              break;
          }
        },
        leave: (currentNode) => {
          switch (currentNode.type) {
            case "FunctionDeclaration":
            case "FunctionExpression":
            case "ArrowFunctionExpression":
            case "BlockStatement":
            case "CatchClause":
            case "ForStatement":
            case "ForInStatement":
            case "ForOfStatement":
              if (scopeStack.length > 1) {
                scopeStack.pop();
              }
              break;
          }
        }
      });
      return foundDependencies;
    }

    getExtractedMatches() {
      return this.extractionStates.filter((item) => Boolean(item.node));
    }

    getSource() {
      return this.source;
    }
  }

  class YouTubeCipherEvaluator {
    constructor(analyzerInstance) {
      this.analyzer = analyzerInstance;
    }

    areSafeArgs(argumentNodes, safetyMode = "strict") {
      return (argumentNodes ?? []).every(
        (argNode) => Boolean(argNode) && argNode.type !== "SpreadElement" && this.isSafeInitializer(argNode, safetyMode)
      );
    }

    isSafeInitializer(astNode, safetyMode = "strict") {
      if (!astNode) return true;
      switch (astNode.type) {
        case "ClassExpression":
          return true;
        case "Literal":
          return (
            typeof astNode.value === "string" ||
            typeof astNode.value === "number" ||
            typeof astNode.value === "boolean" ||
            astNode.value === null ||
            Boolean(astNode.regex)
          );
        case "TemplateLiteral":
          return astNode.expressions.every((expr) => this.isSafeInitializer(expr, safetyMode));
        case "ArrayExpression":
          return astNode.elements.every(
            (elementNode) => !elementNode || (elementNode.type !== "SpreadElement" && this.isSafeInitializer(elementNode, safetyMode))
          );
        case "ObjectExpression":
          return astNode.properties.every(
            (propertyNode) =>
              propertyNode.type === "Property" &&
              (!propertyNode.computed || this.isSafeInitializer(propertyNode.key, safetyMode)) &&
              this.isSafeInitializer(propertyNode.value, safetyMode)
          );
        case "BinaryExpression":
        case "LogicalExpression":
          return this.isSafeInitializer(astNode.left, safetyMode) && this.isSafeInitializer(astNode.right, safetyMode);
        case "UnaryExpression":
          return this.isSafeInitializer(astNode.argument, safetyMode);
        case "ConditionalExpression":
          return (
            this.isSafeInitializer(astNode.test, safetyMode) &&
            this.isSafeInitializer(astNode.consequent, safetyMode) &&
            this.isSafeInitializer(astNode.alternate, safetyMode)
          );
        case "FunctionExpression":
        case "ArrowFunctionExpression":
          return true;
        case "MemberExpression":
          if (safetyMode === "loose") {
            return (
              (astNode.object.type === "Identifier" || this.isSafeInitializer(astNode.object, safetyMode)) &&
              (!astNode.computed || this.isSafeInitializer(astNode.property, safetyMode))
            );
          }
          return false;
        case "CallExpression":
          if (safetyMode === "loose" && astNode.callee.type === "Identifier") {
            return this.areSafeArgs(astNode.arguments, safetyMode);
          }
          return false;
        case "NewExpression":
          if (safetyMode === "loose" && astNode.callee.type === "Identifier" && SAFE_BUILTIN_GLOBALS.has(astNode.callee.name)) {
            return this.areSafeArgs(astNode.arguments, safetyMode);
          }
          return false;
        case "Identifier":
          return safetyMode === "loose";
        default:
          return false;
      }
    }

    getInitializerFallback(astNode) {
      switch (astNode?.type) {
        case "ObjectExpression":
        case "NewExpression":
        case "MemberExpression":
        case "LogicalExpression":
          return "{}";
        case "ArrayExpression":
          return "[]";
        default:
          return "undefined";
      }
    }

    renderNode(astNode, isPredeclared, renderOptions = {}) {
      var sourceText = this.analyzer.getSource();
      var declaredVars = this.analyzer.declaredVariables;
      var sideEffectConfig = renderOptions.disallowSideEffectInitializers;
      var safetyMode =
        typeof sideEffectConfig === "object" && sideEffectConfig !== null && sideEffectConfig.mode !== undefined
          ? sideEffectConfig.mode
          : "strict";
      var shouldDisallowSideEffects = Boolean(sideEffectConfig);

      var assignmentExpr =
        astNode.type === "AssignmentExpression"
          ? astNode
          : astNode.type === "ExpressionStatement" && astNode.expression.type === "AssignmentExpression"
          ? astNode.expression
          : null;
      var initializerNode =
        assignmentExpr && assignmentExpr.operator === "="
          ? assignmentExpr.right
          : astNode.type === "VariableDeclarator"
          ? astNode.init
          : null;
      var isUnsafe =
        shouldDisallowSideEffects &&
        initializerNode &&
        !this.isSafeInitializer(initializerNode, safetyMode);
      var fallbackSnippet = this.getInitializerFallback(initializerNode);
      var renderedInitializer = fallbackSnippet;

      if (!isUnsafe && initializerNode) {
        if (isPredeclared || initializerNode.type !== "Identifier" || declaredVars.has(initializerNode.name)) {
          var assignLeft = assignmentExpr?.left;
          if (
            !(
              initializerNode?.type === "MemberExpression" &&
              !initializerNode.computed &&
              initializerNode.property.type === "Identifier" &&
              initializerNode.property.name === "prototype"
            ) &&
            assignLeft?.type === "MemberExpression" &&
            initializerNode &&
            shouldDisallowSideEffects &&
            assignLeft.object.type === "Identifier" &&
            initializerNode.type !== "FunctionExpression" &&
            initializerNode.type !== "ArrowFunctionExpression" &&
            initializerNode.type !== "LogicalExpression" &&
            initializerNode.type !== "ClassExpression"
          ) {
            return "  // Skipped " + resolveMemberExpressionName(assignLeft, sourceText) + " assignment.";
          }
          renderedInitializer =
            getNodeSource(initializerNode, sourceText)?.trim().replace(/;\s*$/, "") ||
            "undefined // [JsExtractor] Failed to extract initializer source.";
        } else {
          renderedInitializer = fallbackSnippet;
        }
      }

      if (!isUnsafe && initializerNode && initializerNode.type === "SequenceExpression" && !renderedInitializer.startsWith("(")) {
        renderedInitializer = "(" + renderedInitializer + ")";
      }

      var targetIdentifierName =
        astNode.type === "VariableDeclarator" && astNode.id.type === "Identifier"
          ? astNode.id.name
          : assignmentExpr && assignmentExpr.left.type === "Identifier"
          ? assignmentExpr.left.name
          : assignmentExpr?.type === "AssignmentExpression"
          ? resolveMemberExpressionName(assignmentExpr.left, sourceText)?.trim()
          : "unknown";

      var statementCode = targetIdentifierName + " = " + renderedInitializer + ";";
      return astNode.type === "VariableDeclarator" && astNode.init && !isPredeclared
        ? "  var " + statementCode
        : "  " + statementCode;
    }

    buildScript(builderOptions) {
      var selfAnalyzer = this;
      var maxDepth = builderOptions.maxDepth !== undefined ? builderOptions.maxDepth : Infinity;
      var forceVarPredeclaration = builderOptions.forceVarPredeclaration ?? false;
      var exportRawValues = builderOptions.exportRawValues ?? false;
      var rawValueOnlyList = builderOptions.rawValueOnly ?? [];
      var extractedMatches = this.analyzer.getExtractedMatches();
      var processedNames = new Set(extractedMatches.map((item) => item.metadata?.name || ""));
      var outputLines = [];
      var predeclaredVars = new Set();
      var contextMap = new Map();
      var extractedRawValues = {};

      function addPredeclaredVar(variableName) {
        if (variableName && !variableName.includes(".")) {
          predeclaredVars.add(variableName);
        }
      }

      var resolveDependencyTree = function(targetMetadata, currentDepth = 0, specificDependency) {
        if (!targetMetadata || currentDepth > maxDepth) return;
        for (var depName of targetMetadata.dependencies) {
          if (specificDependency && specificDependency !== depName) {
            if (!processedNames.has(specificDependency)) continue;
            specificDependency = undefined;
          }
          if (!processedNames.has(depName)) {
            processedNames.add(depName);
            var foundRecord = selfAnalyzer.analyzer.declaredVariables.get(depName);
            if (foundRecord) {
              var needsPredeclaration = forceVarPredeclaration || foundRecord.predeclared;
              if (needsPredeclaration) {
                addPredeclaredVar(depName);
              }
              resolveDependencyTree(foundRecord, currentDepth + 1, specificDependency);
              outputLines.push(selfAnalyzer.renderNode(foundRecord.node, needsPredeclaration, builderOptions));
              if (foundRecord.prototypeAliases.size > 0) {
                for (var [, aliasSet] of foundRecord.prototypeAliases) {
                  for (var aliasItem of aliasSet) {
                    resolveDependencyTree(aliasItem, currentDepth);
                    outputLines.push(selfAnalyzer.renderNode(aliasItem.node, needsPredeclaration, builderOptions));
                  }
                }
              }
            }
          }
        }
      };

      for (var extractionItem of extractedMatches) {
        var friendlyName = extractionItem.config.friendlyName;
        var isRawOnly = friendlyName && rawValueOnlyList.includes(friendlyName);
        if (extractionItem.metadata) {
          if (!isRawOnly) {
            outputLines.push("  //#region --- start [" + (friendlyName || "Unknown") + "] ---");
          }
          var shouldPredeclare = (forceVarPredeclaration || extractionItem.metadata.predeclared) && !isRawOnly;
          var onlyProcessMatchContext = extractionItem.config.onlyProcessMatchContext;
          if (shouldPredeclare) {
            addPredeclaredVar(extractionItem.metadata.name);
          }
          if (extractionItem.config.collectDependencies && !isRawOnly) {
            var contextCalleeName;
            var matchContextNode = extractionItem.matchContext;
            if (matchContextNode?.type === "NewExpression" && onlyProcessMatchContext) {
              if (matchContextNode.callee.type === "Identifier") {
                contextCalleeName = matchContextNode.callee.name;
              } else if (matchContextNode.callee.type === "MemberExpression") {
                contextCalleeName = resolveMemberExpressionName(matchContextNode.callee, this.analyzer.getSource()) || undefined;
              }
            }
            resolveDependencyTree(extractionItem.metadata, undefined, contextCalleeName);
          }
          if (extractionItem.matchContext && friendlyName) {
            contextMap.set(friendlyName, extractionItem.matchContext);
            if (exportRawValues) {
              var ctxNode = extractionItem.matchContext;
              var sourceCode = this.analyzer.getSource();
              var extractedSnippet =
                ctxNode.type === "Property"
                  ? getNodeSource(ctxNode.value, sourceCode)
                  : ctxNode.type === "Identifier"
                  ? ctxNode.name
                  : getNodeSource(ctxNode, sourceCode);
              extractedRawValues[friendlyName] = extractedSnippet;
            }
          }
          if (!isRawOnly) {
            if (!onlyProcessMatchContext) {
              outputLines.push(this.renderNode(extractionItem.metadata.node, shouldPredeclare, builderOptions));
            }
            outputLines.push("  //#endregion --- end [" + (friendlyName || "Unknown") + "] ---\n");
          }
        }
      }

      var scriptLines = [];
      scriptLines.push("const __jsExtractorGlobal = typeof globalThis !== 'undefined' ? globalThis :");
      scriptLines.push("  typeof self !== 'undefined' ? self :");
      scriptLines.push("  typeof window !== 'undefined' ? window :");
      scriptLines.push("  typeof global !== 'undefined' ? global : {};\n");
      scriptLines.push("const exportedVars = (function(" + this.analyzer.iifeParamName + ") {");
      scriptLines.push("  const window = typeof __jsExtractorGlobal.window !== 'undefined' ? __jsExtractorGlobal.window : Object.create(null);");
      scriptLines.push("  const document = typeof __jsExtractorGlobal.document !== 'undefined' ? __jsExtractorGlobal.document : {};");
      scriptLines.push("  const self = typeof __jsExtractorGlobal.self !== 'undefined' ? __jsExtractorGlobal.self : window;\n");

      if (predeclaredVars.size > 0) {
        scriptLines.push("  var " + Array.from(predeclaredVars).join(", ") + ";\n");
      }
      scriptLines.push(outputLines.join("\n"));

      var exportedNames = [];
      for (var [contextKey, contextValueNode] of contextMap) {
        var wrapperTargetNode = null;
        if (contextValueNode.type === "Identifier") {
          var mappedRecord = this.analyzer.declaredVariables.get(contextValueNode.name);
          if (mappedRecord?.node?.type === "VariableDeclarator" && mappedRecord.node.init?.type === "FunctionExpression") {
            wrapperTargetNode = mappedRecord.node;
          }
        } else if (
          contextValueNode.type === "CallExpression" ||
          contextValueNode.type === "NewExpression" ||
          contextValueNode.type === "VariableDeclarator"
        ) {
          wrapperTargetNode = contextValueNode;
        }
        if (wrapperTargetNode) {
          var wrapperDefinition = createWrapperFunction(this.analyzer, contextKey, wrapperTargetNode);
          if (wrapperDefinition) {
            scriptLines.push(wrapperDefinition + "\n");
            exportedNames.push(contextKey);
          }
        }
      }

      if (exportRawValues) {
        var formattedRawJson = JSON.stringify(extractedRawValues, null, 2).split("\n");
        var indentedRawJson = formattedRawJson[0] + "\n" + formattedRawJson.slice(1).map((lineItem) => "  " + lineItem).join("\n");
        scriptLines.push("  const rawValues = " + indentedRawJson + ";\n");
        exportedNames.push("rawValues");
      }

      scriptLines.push("  return { " + exportedNames.join(", ") + " };");
      scriptLines.push("})({});\n");

      return {
        output: scriptLines.join("\n"),
        exported: exportedNames,
        exportedRawValues: exportRawValues ? extractedRawValues : undefined
      };
    }
  }

  function matchNsigFunction(astNode) {
    if (astNode.type !== "VariableDeclarator") return false;
    var initFunc = astNode.init;
    if (!initFunc || initFunc.type !== "FunctionExpression") return false;
    if (initFunc.params.length < 3) return false;
    var firstParam = initFunc.params[0];
    var secondParam = initFunc.params[1];
    var thirdParam = initFunc.params[2];
    if (
      firstParam.type !== "Identifier" ||
      secondParam.type !== "AssignmentPattern" ||
      thirdParam.type !== "AssignmentPattern"
    ) {
      return false;
    }
    var functionBody = initFunc.body;
    var hasNewMemberAssignment = false;
    var hasAlrYesCall = false;

    for (var bodyStatement of functionBody?.body || []) {
      if (bodyStatement.type === "ExpressionStatement") {
        var expr = bodyStatement.expression;
        if (
          expr.type === "AssignmentExpression" &&
          expr.operator === "=" &&
          expr.left.type === "Identifier" &&
          expr.left.name === firstParam.name
        ) {
          if (expr.right.type === "NewExpression" && expr.right.callee.type === "MemberExpression") {
            hasNewMemberAssignment = true;
          }
        }
        if (expr.type === "CallExpression" && expr.callee.type === "MemberExpression") {
          var callArgs = expr.arguments;
          if (
            callArgs.length === 2 &&
            callArgs[0].type === "Literal" &&
            callArgs[0].value === "alr" &&
            callArgs[1].type === "Literal" &&
            callArgs[1].value === "yes"
          ) {
            hasAlrYesCall = true;
          }
        }
      }
    }
    return hasNewMemberAssignment && hasAlrYesCall ? astNode : false;
  }

  function matchSignatureTimestamp(astNode) {
    if (astNode.type !== "VariableDeclarator" || astNode.init?.type !== "FunctionExpression") {
      return false;
    }
    var functionBody = astNode.init.body;
    if (!functionBody) return false;
    var signaturePropertyNode = null;
    walkAst(functionBody, (nodeItem) => {
      if (nodeItem.type === "ObjectExpression") {
        for (var objectProp of nodeItem.properties) {
          if (
            objectProp.type === "Property" &&
            objectProp.key.type === "Identifier" &&
            objectProp.key.name === "signatureTimestamp"
          ) {
            signaturePropertyNode = objectProp;
            return WALK_STOP;
          }
        }
      }
    });
    return signaturePropertyNode || false;
  }

  class YouTubePlayerDecryptor {
    static get PLAYER_CONFIG_RX() {
      return /ytInitialPlayerResponse\s*=\s*({.+});(var meta)?/i;
    }

    static get PLAYER_URL_RX() {
      return /(src|href)=['"]([a-z0-9\-_\/\.]*player\/[a-z0-9\-_\/\.]*\/base\.js)['"]/i;
    }

    static get PLAYER_URL_MUSIC_RX() {
      return /"jsUrl":\s*"(.+?\/base.js)"/;
    }

    static get USER_SESSION_ID_RX() {
      return /"USER_SESSION_ID"\s*:\s*"(.+?)"/;
    }

    static get VISITOR_DATA_RX() {
      return /"VISITOR_DATA":\s*"([^"]+)"/i;
    }

    static get INNERTUBE_API_KEY_RX() {
      return /"innertubeApiKey":\s*"([^"]+)"/i;
    }

    static get INNERTUBE_CONTEXT_CLIENT_VERSION_RX() {
      return /"innertubeContextClientVersion":\s*"([^"]+)"/i;
    }

    static get DATASYNC_ID_RX() {
      return /"datasyncId":\s*"([^"]+)"/i;
    }

    static async fetchConfigs(videoId) {
      var watchUrl = "https://" + location.hostname + "/watch?v=" + videoId + "&has_verified=1";
      var pageHtml;
      if (watchUrl.match(/(youtube-nocookie)/i)) {
        var corsResponse = await utils.sendMessage({
          type: mediaConstants.b.CORS_FETCH,
          data: {
            url: "https://www.youtube.com/watch?v=" + videoId + "&has_verified=1",
            responseType: "text"
          }
        });
        pageHtml = corsResponse.data;
      } else {
        pageHtml = await fetch(watchUrl).then((res) => res.text()).catch(() => {
          return utils.send("GET", watchUrl).then((res) => res.responseText);
        });
      }

      this.visitorData = pageHtml.match(this.VISITOR_DATA_RX)?.[1];
      this.apiKey = pageHtml.match(this.INNERTUBE_API_KEY_RX)?.[1];
      this.clientVersion = pageHtml.match(this.INNERTUBE_CONTEXT_CLIENT_VERSION_RX)?.[1];
      this.datasyncId = pageHtml.match(this.DATASYNC_ID_RX)?.[1]?.replace(/\|/g, "");

      var sessionMatch = pageHtml.match(this.USER_SESSION_ID_RX);
      if (sessionMatch) {
        this.ssId = sessionMatch[1];
      }

      var slicedSnippet = pageHtml.slice(0, pageHtml.indexOf("var meta =") + 1 || undefined);
      var configString = slicedSnippet.match(this.PLAYER_CONFIG_RX)?.[1] || "";
      try {
        if (configString) JSON.parse(configString);
      } catch (jsonErr) {
        var fallbackSlice = configString.slice(0, configString.indexOf("};<") + 1 || undefined);
        configString = fallbackSlice.match(/({.+});?/)?.[1] || "";
      }

      var storageResult = await chrome.storage.local.get(mediaConstants.w);
      var storedPlayerUrl = storageResult[mediaConstants.w]?.playerUrl;
      var matchedPlayerUrl =
        storedPlayerUrl ||
        pageHtml.match(this.PLAYER_URL_RX)?.[2] ||
        pageHtml.match(this.PLAYER_URL_MUSIC_RX)?.[1];
      if (matchedPlayerUrl) {
        this.foundPlayerUrlFromConfig = matchedPlayerUrl;
      }

      if (!this.playerScript && matchedPlayerUrl) {
        this.playerScript = await fetch(matchedPlayerUrl).then((res) => res.text());
      }

      var parsedConfig = this.parseConfig(configString);
      if (parsedConfig) {
        return parsedConfig;
      }

      try {
        var domParserInstance = new DOMParser();
        var htmlDoc = domParserInstance.parseFromString(pageHtml, "text/html");
        htmlDoc.querySelectorAll("script");
        var scriptConfig = Array.from(htmlDoc.querySelectorAll("body script"))
          .map((scriptElement) => scriptElement.innerText?.match(this.PLAYER_CONFIG_RX)?.[1])
          .find((item) => Boolean(item));
        return this.parseConfig(scriptConfig || "");
      } catch (domParseError) {
        return null;
      }
    }

    static getConfigFromSite() {
      var foundScript = Array.from(document.querySelectorAll("script")).find((scriptNode) =>
        scriptNode.innerText.includes("ytInitialPlayerResponse")
      );
      var scriptText = foundScript?.innerText || "";
      return this.parseConfig(scriptText);
    }

    static get playerURL() {
      var playerLink = document.querySelector('link[href*="player/"][href*="/base"], script[src*="player/"][src*="/base"]');
      return playerLink?.href || this.foundPlayerUrlFromConfig;
    }

    static get signatureTimestamp() {
      var stsMatch = this.playerScript.match(/(signatureTimestamp|sts):(\d+)/);
      return stsMatch?.[2] ? parseInt(stsMatch[2], 10) : undefined;
    }

    static parseConfig(configJsonString) {
      try {
        return JSON.parse(configJsonString);
      } catch (parseError) {
        utils.devLog(parseError);
        return null;
      }
    }

    static async getNeededMetadataFromConfig(playerConfig, proofOfOriginToken) {
      if (!playerConfig || !playerConfig.playabilityStatus || !playerConfig.playabilityStatus.status) {
        throw new Error("Invalid playabilityStatus");
      }
      if (playerConfig.playabilityStatus.status === "LOGIN_REQUIRED") {
        throw new Error("LOGIN_REQUIRED");
      }
      if (playerConfig.playabilityStatus.status !== "OK") {
        throw new Error("API_ERROR");
      }
      if (playerConfig.playabilityStatus.reason === "This video is unavailable") {
        throw new Error("VIDEO_UNAVAILABLE");
      }
      if (playerConfig.videoDetails?.shortDescription === "Video Not Available") {
        throw new Error("VIDEO_NOT_AVAILABLE");
      }
      if (!playerConfig.streamingData) {
        throw new Error("INVALID_STREAMING_DATA");
      }

      playerConfig.streamingData.formats = [
        ...(playerConfig.streamingData.adaptiveFormats || []),
        ...(playerConfig.streamingData.formats || [])
      ];

      var directUrlFormats = playerConfig.streamingData.formats.filter((item) => item.url);
      if (directUrlFormats.length / playerConfig.streamingData.formats.length > 0.4) {
        try {
          await verifySampleMediaUrls(directUrlFormats);
          return {
            formats: playerConfig.streamingData.formats,
            player_response: { captions: playerConfig.captions },
            videoDetails: playerConfig.videoDetails
          };
        } catch (verificationError) {
          console.log(verificationError);
        }
      }

      var missingUrlFormats = playerConfig.streamingData.formats.filter(
        (item) => !item.url && !item.signatureCipher && !item.cipher
      );
      if (missingUrlFormats.length / playerConfig.streamingData.formats.length >= 0.4) {
        throw new Error("MISSING_URL_CIPHER");
      }

      if (!this.playerURL) {
        throw new Error("PLAYER_FILE_NOT_FOUND");
      }

      var astAnalyzerInstance = new YouTubePlayerAstAnalyzer(this.playerScript, {
        extractions: [
          { friendlyName: "nsigFunction", match: matchNsigFunction },
          { friendlyName: "signatureTimestampVar", match: matchSignatureTimestamp, collectDependencies: false }
        ]
      });

      var evaluatorInstance = new YouTubeCipherEvaluator(astAnalyzerInstance);
      var generatedScriptResult = evaluatorInstance.buildScript({
        disallowSideEffectInitializers: true,
        exportRawValues: true,
        rawValueOnly: ["signatureTimestampVar"]
      });

      if (!generatedScriptResult.exported.includes("nsigFunction")) {
        console.warn("Youtube.js", "Failed to extract n/sig decipher function.");
      }

      var videoId = playerConfig.videoDetails.videoId;
      document.body.setAttribute("savior-functions", JSON.stringify(generatedScriptResult));
      document.body.setAttribute("savior-meta-video-id", videoId);
      document.body.setAttribute(
        "savior-meta-formats-" + videoId,
        JSON.stringify(playerConfig.streamingData.formats)
      );

      try {
        var injectionResponse = await utils.sendMessage({
          type: mediaConstants.b.SCRIPTING.INJECT,
          file: "youtube/youtubejs",
          videoId: playerConfig.videoDetails.videoId
        });

        var resolvedFormats = injectionResponse && injectionResponse.length
          ? injectionResponse
          : JSON.parse(document.body.getAttribute("savior-decoded-meta-formats") || "[]");

        for (var streamFormat of resolvedFormats) {
          try {
            var streamUrl = new URL(streamFormat.url);
            if (playerConfig.cver) {
              streamUrl.searchParams.set("cver", encodeURIComponent(playerConfig.cver));
            }
            if (proofOfOriginToken) {
              streamUrl.searchParams.set("pot", proofOfOriginToken);
            }
            streamFormat.url = streamUrl.href;
          } catch (urlUpdateError) {
            console.error(urlUpdateError);
          }
        }

        await verifySampleMediaUrls(resolvedFormats);
        return {
          formats: resolvedFormats,
          player_response: { captions: playerConfig.captions },
          videoDetails: playerConfig.videoDetails
        };
      } catch (pipelineError) {
        console.error(pipelineError);
        throw pipelineError;
      } finally {
        document.body.removeAttribute("savior-functions");
        document.body.removeAttribute("savior-meta-video-id");
        document.body.removeAttribute("savior-meta-formats-" + videoId);
        document.body.removeAttribute("savior-decoded-meta-formats");
      }
    }

    static async getMetadataFromVideoID(videoId, proofOfOriginToken) {
      try {
        var retrievedConfig = await this.fetchConfigs(videoId);
        if (!retrievedConfig) {
          throw new Error("Cannot fetch config");
        }
        return await this.getNeededMetadataFromConfig(retrievedConfig, proofOfOriginToken);
      } catch (fetchError) {
        console.error(fetchError);
        throw fetchError;
      }
    }
  }

  function getMediaQualityScore(mediaItem) {
    return mediaItem.height || mediaItem.bitrate;
  }

  async function verifySampleMediaUrls(formatList) {
    var bestVideo = formatList
      .filter((item) => item.mimeType.includes("video"))
      .reduce((best, current) => (getMediaQualityScore(best) < getMediaQualityScore(current) ? current : best), formatList[0]);
    var bestAudio = formatList
      .filter((item) => item.mimeType.includes("audio"))
      .reduce((best, current) => (getMediaQualityScore(best) < getMediaQualityScore(current) ? current : best), formatList[0]);

    if (!bestVideo.url || !bestAudio.url) {
      throw new Error("MISSING_URL_CIPHER");
    }

    var isSuccessfulStatus = (statusCode) => Boolean(statusCode) && statusCode >= 200 && statusCode < 300;
    var initialStatuses = await Promise.all([
      utils.fetchStatus(bestVideo.url),
      utils.fetchStatus(bestAudio.url)
    ]);
    var videoStatus = initialStatuses[0];
    var audioStatus = initialStatuses[1];

    if (!isSuccessfulStatus(videoStatus) || !isSuccessfulStatus(audioStatus)) {
      await utils.sleep(2000);
      var retryStatuses = await Promise.all([
        isSuccessfulStatus(videoStatus) ? Promise.resolve(videoStatus) : utils.fetchStatus(bestVideo.url),
        isSuccessfulStatus(audioStatus) ? Promise.resolve(audioStatus) : utils.fetchStatus(bestAudio.url)
      ]);
      videoStatus = retryStatuses[0];
      audioStatus = retryStatuses[1];
    }

    if (!isSuccessfulStatus(videoStatus) || !isSuccessfulStatus(audioStatus)) {
      throw new Error("REQUEST_SAMPLE_FAILED");
    }
  }

  YouTubePlayerDecryptor.playerScript = "";
  YouTubePlayerDecryptor.ssId = "";
  YouTubePlayerDecryptor.visitorData = "";
  YouTubePlayerDecryptor.apiKey = "";
  YouTubePlayerDecryptor.clientVersion = "";
  YouTubePlayerDecryptor.datasyncId = "";
  YouTubePlayerDecryptor.foundPlayerUrlFromConfig = "";
};