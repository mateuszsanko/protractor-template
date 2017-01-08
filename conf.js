// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  seleniumServerJar: "./node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.0.1.jar",
  chromeDriver: "./node_modules/chromedriver/lib/chromedriver/chromedriver",


  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['./suites/example_spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};