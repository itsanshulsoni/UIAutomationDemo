/**
 *
 * @name puppeteer_environment
 *
 * @desc The test environment that will be used for testing.
 *       Note: TestEnvironment is sandboxed. Each test suite will trigger setup/teardown in their own TestEnvironment.
 *
 * @author ansoni (Anshul Soni)
 *
 */

const chalk = require('chalk');
const NodeEnvironment = require('jest-environment-node');
const puppeteer = require('puppeteer');
const fs = require('fs');
const os = require('os');
const path = require('path');
const envConfigurationFromFile = require('../environment/environment.setup');

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

class PuppeteerEnvironment extends NodeEnvironment {
  async setup() {
    console.log(chalk.yellow('Setup Test Environment for each test suite.'));

    await super.setup();

    const wsEndpoint = fs.readFileSync(path.join(DIR, 'wsEndpoint'), 'utf8');

    if (!wsEndpoint) {
      throw new Error('wsEndpoint not found');
    }

    this.global.__BROWSER__ = await puppeteer.connect({
      browserWSEndpoint: wsEndpoint
    });

    // Setting up global envContext
    this.global.envContext = envConfigurationFromFile;
  }

  async teardown() {
    console.log(chalk.yellow('Teardown Test Environment for each test suite.'));

    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = PuppeteerEnvironment;
