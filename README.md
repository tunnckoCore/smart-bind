# [smart-bind][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Smarter binding of function with some context. It uses .apply instead of .bind, with reason.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install
```
npm i smart-bind --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const smartBind = require('smart-bind')
```

### [smartBind](index.js#L35)
> Smart bind `ctx` to `fn` instead use of native `.bind`

**Params**

* `ctx` **{Object|Function}**    
* `fn` **{Function}**    
* `returns` **{Function}**  

**Example**

```js
var smartBind = require('smart-bind')

function zoopark () { return this.foo }

var bound = smartBind({foo: 'bar'}, zoopark)

console.log(bound()) // => 'bar'
console.log(bound.toString()) // => 'function zoopark () { return this.foo }'
```

## Related
* [bind-context](https://www.npmjs.com/package/bind-context): Bind context to a function and preserves her name. Can be used… [more](https://www.npmjs.com/package/bind-context) | [homepage](https://github.com/tunnckocore/bind-context)
* [is-bound-function](https://www.npmjs.com/package/is-bound-function): Check if given function is bound or not. | [homepage](https://github.com/tunnckocore/is-bound-function)
* [relike](https://www.npmjs.com/package/relike): Simple promisify a callback-style function with sane defaults. Support promisify-ing sync functions. | [homepage](https://github.com/hybridables/relike)

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/smart-bind/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[is-bound-function]: https://github.com/tunnckocore/is-bound-function
[isobject]: https://github.com/jonschlinkert/isobject

[npmjs-url]: https://www.npmjs.com/package/smart-bind
[npmjs-img]: https://img.shields.io/npm/v/smart-bind.svg?label=smart-bind

[license-url]: https://github.com/tunnckoCore/smart-bind/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/smart-bind
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/smart-bind.svg

[travis-url]: https://travis-ci.org/tunnckoCore/smart-bind
[travis-img]: https://img.shields.io/travis/tunnckoCore/smart-bind/master.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/smart-bind
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/smart-bind.svg

[david-url]: https://david-dm.org/tunnckoCore/smart-bind
[david-img]: https://img.shields.io/david/tunnckoCore/smart-bind.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg

