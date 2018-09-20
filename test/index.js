'use strict';

var test = require('tape');
var inspect = require('object-inspect');
var isBoxedPrimitive = require('..');

var debug = function (v, m) { return inspect(v) + ' ' + m; };

var forEach = function (arr, func) {
	var i;
	for (i = 0; i < arr.length; ++i) {
		func(arr[i], i, arr);
	}
};

var hasSymbols = require('has-symbols')();
var hasBigInts = typeof BigInt === 'function';

var primitives = [
	true,
	false,
	42,
	NaN,
	Infinity,
	'',
	'foo'
].concat(
	hasSymbols ? [Symbol(), Symbol.iterator] : [],
	hasBigInts ? BigInt(42) : []
);

var objects = [
	/a/g,
	new Date(),
	function () {},
	[],
	{}
];

test('isBoxedPrimitive', function (t) {
	t.test('unboxed primitives', function (st) {
		forEach([null, undefined].concat(primitives), function (primitive) {
			st.equal(false, isBoxedPrimitive(primitive), debug(primitive, 'is not a boxed primitive'));
		});
		st.end();
	});

	t.test('boxed primitives', function (st) {
		forEach(primitives, function (primitive) {
			var boxed = Object(primitive);
			st.equal(true, isBoxedPrimitive(boxed), debug(boxed, 'is a boxed primitive'));
		});
		st.end();
	});

	t.test('non-primitive objects', function (st) {
		forEach(objects, function (object) {
			st.equal(false, isBoxedPrimitive(object), debug(object, 'is not a boxed primitive'));
		});
		st.end();
	});

	t.end();
});
