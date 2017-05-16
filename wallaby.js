process.env.NODE_ENV = 'test'

module.exports = function () {
  return {
    files: [
      'app.js',
      'controllers/**/*.js',
      'models/**/*.js',
      'routes/**/*.js',
      'config/**/*.json'
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
