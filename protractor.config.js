exports.config = {
  framework: 'jasmine',

  capabilities: {
    browserName: 'chrome',
  },

  directConnect: true,

  specs: ['paymentForm.spec.js'],

  onPrepare: function() {
    browser.waitForAngularEnabled(false);
    browser.driver.manage().window().maximize;
  },

  jasmineNodeOpts: {
    showColors: true
  }
};