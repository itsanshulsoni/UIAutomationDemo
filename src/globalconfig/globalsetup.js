/**
 * @name globalsetup
 * @desc (This option allows the use of a custom global setup module which exports an async function that is triggered once before all test suites.
 *        This function gets Jest's globalConfig object as a parameter.)
 * @author ansoni (Anshul Soni)
 */
import chalk from 'chalk';
import puppeteer from 'puppeteer';
import fs from 'fs';
import mkdirp from 'mkdirp';
import os from 'os';
import path from 'path';

const testEnvContext = require('../environment/environment.setup');

require('dotenv').config();

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

export default async function () {

  // JEST command line arguments
  const argv = process.argv.slice(2);

  console.log(
    '\n',
    '----------------------------------------------------------------------------------------------------------------------------',
    '\n'
  );

  console.log(
    chalk.grey(' \u2592\u2592\u2592 Reading jest command line : '),
    chalk.grey(argv),
    chalk.green('\u2714')
  );
  console.log(
    chalk.grey(
      ' \u2592\u2592\u2592 Reading jest.config for Global set up, Global teardown, jest test environment, testRegex ',
      chalk.green('\u2714')
    )
  );
  console.log(
    chalk.grey(
      ' \u2592\u2592\u2592 Setting up Global Puppeteer Environment ',
      chalk.green('\u2714')
    )
  );

  // Read default proxy from .env file
  const defaultProxy = testEnvContext.proxy;
  const proxy = process.env.proxy == null ? defaultProxy : process.env.proxy;

  // Custom debug options
  const debugOptions = {
    headless: process.env.headless !== 'FALSE',
    args: [
      `--proxy-server=${proxy}`,
      '--start-fullscreen',
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ],
  };

  console.log('\n', debugOptions, '\n');

  // launch puppeteer
  const browser = await puppeteer.launch(debugOptions);

  // assigning browse to global instance
  global.__BROWSER__ = browser;


  console.log(chalk.yellow('\n', '##### Test Build Details #####'), '\n');


  console.log(chalk.grey(`PLATFORM`), '\t', ':', `${testEnvContext.platform}`);
  if (testEnvContext.platform === 'MWEB') {
    console.log(
      chalk.grey(`DEVICE`),
      '\t',
      '\t',
      ':',
      `${testEnvContext.device.name}`
    );
  }
  console.log(
    chalk.grey(`ENVIRONMENT`),
    '\t',
    ':',
    `${process.env.environment}`
  );
  console.log(chalk.grey(`POOL`), '\t', ':');
  console.log(testEnvContext.pool);

  console.log(
    '\n',
    '----------------------------------------------------------------------------------------------------------------------------',
    '\n'
  );

  // Instead, we expose the connection details via file system to be used in tests
  mkdirp.sync(DIR);
  fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());
}
