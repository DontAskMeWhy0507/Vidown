/**
 * scripts/build.js
 * esbuild compilation pipeline for Vidown extension bundles.
 */

const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

async function build() {
  const startTime = Date.now();
  console.log('--- Starting Vidown Clean Bundle Compilation ---');

  const distDir = path.join(__dirname, '..', 'dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // 1. Build Content Script Bundle
  const contentInput = path.join(__dirname, '..', 'src', 'content', 'index.js');
  const contentOutput = path.join(distDir, 'content-script.js');

  console.log(`Bundling: ${contentInput} -> ${contentOutput}`);
  await esbuild.build({
    entryPoints: [contentInput],
    outfile: contentOutput,
    bundle: true,
    minify: true,
    format: 'iife',
    target: ['es2022', 'chrome116'],
    platform: 'browser',
    sourcemap: false,
    legalComments: 'none'
  });

  const contentStats = fs.statSync(contentOutput);
  const contentSizeKb = (contentStats.size / 1024).toFixed(2);
  console.log(`✓ Content Script bundle created: ${contentSizeKb} KB (${contentStats.size} bytes)`);

  const elapsed = Date.now() - startTime;
  console.log(`\n🎉 Build completed successfully in ${elapsed} ms!`);
}

if (require.main === module) {
  build().catch((err) => {
    console.error('Build failed:', err);
    process.exit(1);
  });
}

module.exports = { build };
