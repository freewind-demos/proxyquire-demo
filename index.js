'use strict';
const core = require('./core');
const path = require('path');

module.exports = function () {
  return 'index > ' + core() + ' > ' + path.basename('/aaa/bbb');
};