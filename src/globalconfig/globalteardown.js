/**
 *
 * @name globalteardown
 *
 * @desc custom global teardown module
 *
 * @author ansoni (Anshul Soni)
 *
 */
// const chalk = require('chalk');
import chalk from 'chalk';
import rimraf from 'rimraf';
import os from 'os';
import path from 'path';

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

module.exports = async function globalTearDown() {
  console.log(chalk.green('#####  Teardown Puppeteer Environment #####'));

  await global.__BROWSER__.close();

  rimraf.sync(DIR);
};
