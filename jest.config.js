/**
 *
 * @name jest.config
 *
 * @desc (This is default jest.config to set up jest-puppeteer environment.
 *       if --config=custom-jest.config.js is passed from command line, this file will not be used)
 */
module.exports = {
  globalSetup: './src/globalconfig/globalsetup.js',
  globalTeardown: './src/globalconfig/globalteardown.js',
  testEnvironment: './src/globalconfig/puppeteer.environment.js',
  testRegex: '/__tests__/.*.test.(js)?$',
  transform: {
    '^.+\\.(mjs|jsx|js)$': 'babel-jest'
  },
  verbose: true,
  moduleNameMapper: {
    'environment(.*)$': '<rootDir>/src/environment/$1',
    'components(.*)$': '<rootDir>/src/components/$1',
    '__test__(.*)$': '<rootDir>/src/__test__/$1'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'Sauce Demo Test Report',
        includeFailureMsg: true,
        includeConsoleLog: true,
        logo: './logo_2.png',
        theme: 'lightTheme',
        outputPath: './report/test-report.html'
      }
    ]
  ]
};
