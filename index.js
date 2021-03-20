'use strict';

module.exports = {
  name: require('./package').name,
  included: (app) => {
    this.app = app;
    app.import('vendor/turbocss/turbocss.browser.watch.min.js');
  }
};
