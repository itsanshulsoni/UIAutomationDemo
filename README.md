# SauceDemo UI Automation

## Description

SauceDemo UI Test Automation for functional tests in JavaScript using (Jest + Puppetier)


## Pre-requisite
Install `NVM` if you don't have it.
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

export environment variable
```
export NVM_DIR="$HOME/.nvm"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

## Installation

1# Install Node.js with `NVM`, 
```
nvm install 10.15.0
```

2# Run `nvm use` on the root folder `SauceDemo_UI_Test/`
```
nvm use 10.15.0
```

3# Install yarn
```
brew install yarn
```

Please install homebrew if you don't have it to install yarn.


4# Run `yarn` on the root folder `SauceDemo_UI_Test/`

```
yarn
```


## Test Execution

Run the following command on the root folder `UIAutomationDemo/':

```sh
headless=FALSE npm run test
```

Command for headless execution of the tests:

```sh
npm run test
```

Console Screenshot:
https://www.dropbox.com/s/foqvxzjeprpqot5/Teminal%20run.png?dl=0

## Test Execution with Custom command line (e.g. Environment)

If you want to run test suite on PROD
```sh
npm run-script test:prod
```

## Test Report

Test report gets generated at /UIAutomationDemo/report/test-report.html
Screenshot:
https://www.dropbox.com/s/j5ma8qror7n3z3t/SauceDemoAutomation_Test%20HTMLReport.png?dl=0


## References
'NVM' 		: https://github.com/creationix/nvm/blob/master/README.md
JEST 		: https://jestjs.io/docs/en/getting-started
Puppeteer 	: https://github.com/GoogleChrome/puppeteer 
Plugin Puppeteer Recorder : https://chrome.google.com/webstore/detail/puppeteer-recorder/djeegiggegleadkkbgopoonhjimgehda?hl=en
