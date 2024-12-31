const reporter = require('cucumber-html-reporter');
const fs = require('fs');
const path = require('path');

const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber-report.json',
  output: 'reports/cucumber-report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGING",
    "Browser": "Chrome  89.0.4389.82",
    "Platform": "Windows 10",
    "Parallel": "Scenarios",
    "Executed": "Remote"
  },
  screenshotsDirectory: 'reports/screenshots/',
  storeScreenshots: true,
  scenarioTimestamp: true,
  name: "Cucumber Report",
  brandTitle: "Cucumber Report",
  columnLayout: 1
};

reporter.generate(options);