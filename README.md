# is-boxed-primitive <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Polyfill/shim for node's `util.isBoxedPrimitive()`

## Example

```js
var isBoxedPrimitive = require('is-boxed-primitive');
var assert = require('assert');

[
	undefined,
	null,
	true,
	false,
	0,
	NaN,
	Infinity,
	0n,
	'',
	'foo',
	Symbol(),
	Symbol.iterator,
].forEach((v) => {
	assert(!isBoxedPrimitive(v)); // primitive form is not boxed
	if (v != null) {
		assert(isBoxedPrimitive(Object(v))); // object form is boxed
	}
});
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/is-boxed-primitive
[npm-version-svg]: https://versionbadg.es/inspect-js/is-boxed-primitive.svg
[deps-svg]: https://david-dm.org/inspect-js/is-boxed-primitive.svg
[deps-url]: https://david-dm.org/inspect-js/is-boxed-primitive
[dev-deps-svg]: https://david-dm.org/inspect-js/is-boxed-primitive/dev-status.svg
[dev-deps-url]: https://david-dm.org/inspect-js/is-boxed-primitive#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/is-boxed-primitive.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/is-boxed-primitive.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/is-boxed-primitive.svg
[downloads-url]: https://npm-stat.com/charts.html?package=is-boxed-primitive
[codecov-image]: https://codecov.io/gh/inspect-js/is-boxed-primitive/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/inspect-js/is-boxed-primitive/
[actions-image]: https://img.shields.io/github/check-runs/inspect-js/is-boxed-primitive/main
[actions-url]: https://github.com/inspect-js/is-boxed-primitive/actions
