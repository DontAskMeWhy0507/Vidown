/**
 * tests/e2e/port_utils.js
 * Zero-dependency dynamic port allocation for Chrome CDP and HTTP fixture servers.
 */
const { isPortAvailable, getAvailablePort, findAvailablePort } = require('./cdp_client');

module.exports = {
  isPortAvailable,
  getAvailablePort,
  findAvailablePort
};
