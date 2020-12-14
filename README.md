# is-boxed-primitive <sup>[![Version Badge][2]][1]</sup>

[![dependency status][5]][6]
[![dev dependency status][7]][8]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][11]][1]

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

[1]: https://npmjs.org/package/is-boxed-primitive
[2]: https://versionbadg.es/inspect-js/is-boxed-primitive.svg
[5]: https://david-dm.org/inspect-js/is-boxed-primitive.svg
[6]: https://david-dm.org/inspect-js/is-boxed-primitive
[7]: https://david-dm.org/inspect-js/is-boxed-primitive/dev-status.svg
[8]: https://david-dm.org/inspect-js/is-boxed-primitive#info=devDependencies
[11]: https://nodei.co/npm/is-boxed-primitive.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/is-boxed-primitive.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/is-boxed-primitive.svg
[downloads-url]: https://npm-stat.com/charts.html?package=is-boxed-primitive
