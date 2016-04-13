/*!
 * smart-bind <https://github.com/tunnckoCore/smart-bind>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var smartBind = require('./index')
var isBound = require('is-bound-function')

/* istanbul ignore next */
function zoopark () {return this.foo} // eslint-disable-line

test('should throw TypeError if `fn` not a function', function (done) {
  function fixture () {
    smartBind({a: 'b'}, 123)
  }

  test.throws(fixture, TypeError)
  test.throws(fixture, /expect `fn` be function/)
  done()
})

test('should bind context to `fn` as native bind', function (done) {
  var bound = smartBind({foo: 'bar'}, zoopark)
  test.strictEqual(bound(), 'bar')
  done()
})

test('should not get `[native code]` when .toString() called', function (done) {
  var bound = smartBind({foo: 'qux'}, zoopark)

  test.strictEqual(bound(), 'qux')
  test.strictEqual(isBound(bound), false)
  done()
})

test('should get `native code` when passed function already bound with native .bind', function (done) {
  var boundFn = zoopark.bind({foo: 'fez'})
  var bound = smartBind({foo: 'qqq'}, boundFn)

  test.strictEqual(bound(), 'fez')
  test.strictEqual(isBound(bound), true)
  done()
})

test('should respect latest context when nested smart binds', function (done) {
  var boundOne = smartBind({foo: 'one'}, zoopark)
  var boundTwo = smartBind({foo: 'two'}, boundOne)
  var boundZzz = smartBind({foo: 'zzz'}, boundTwo)

  test.strictEqual(boundOne(), 'one')
  test.strictEqual(boundTwo(), 'two')
  test.strictEqual(boundZzz(), 'zzz')
  done()
})

test('should use context bound to smartBind with native .bind', function (done) {
  var bind = smartBind.bind({foo: 'aaa'})
  var bound = bind(zoopark)

  test.strictEqual(bound(), 'aaa')
  done()
})
