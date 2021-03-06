'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  appEnv: 'test' // don't remove the appEnv property here
};

exports.default = Object.freeze(Object.assign(_base2.default, config));