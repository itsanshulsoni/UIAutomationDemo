/**
 * @name environment.setup
 *
 * @desc (Based on test build param process.env.ENV, default environment is determined and exported to be used by test suite.
 *        This can eliminate logic to build custom build for site and pool)
 *
 * @author ansoni (Anshul Soni)
 */

const envProd = require('./prod.env');

const constants = require('../common_modules/constants');

// Constants
const DEFAULT_PLATFORM = constants.DESKTOP;

// Default Pool Configuration
let testEnvContext = envProd;

// custom test run details from test build params
const testBuildEnvionment = process.env.environment;
const testBuildPlatform = process.env.platform;

// Set POOL as per environment
if (testBuildEnvionment.length !== 0) {
  if (testBuildEnvionment === constants.PROD) {
    testEnvContext = envProd;
  }
}

// Set platform for test run. If PLATFORM is not passed from test build, then default PLATFORM is 'DESKTOP'
testEnvContext.platform =
  testBuildPlatform != null ? testBuildPlatform : DEFAULT_PLATFORM;

module.exports = testEnvContext;