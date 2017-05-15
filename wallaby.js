module.exports = function () {
  return {
    files: [
      'app.js',
      'controllers/**/*.js',
      'routes/**/*.js'
    ],

    tests: [
      'tests/**/*-test.js'
    ],

    setup: function () {
      global.expect = require('chai').expect
    },

    env: {
      type: 'node',
      runner: 'node'
    }
  }
}
