'use strict';

var isString = require('is-string');
var isNumber = require('is-number-object');
var isBoolean = require('is-boolean-object');
var isSymbol = require('is-symbol');
var isBigInt = require('is-bigint');

module.exports = function isBoxedPrimitive(value) {
	if (!value || typeof value !== 'object') {
		return false;
	}

	return isString(value) || isNumber(value) || isBoolean(value) || isSymbol(value) || isBigInt(value);
};
