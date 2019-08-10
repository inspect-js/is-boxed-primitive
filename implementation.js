'use strict';

var whichBoxedPrimitive = require('which-boxed-primitive');

module.exports = function isBoxedPrimitive(value) {
	return typeof whichBoxedPrimitive(value) === 'string';
};
