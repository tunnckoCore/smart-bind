/*!
 * smart-bind <https://github.com/tunnckoCore/smart-bind>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var isObject = require('isobject')
var isBound = require('is-bound-function')

/**
 * > Smart bind `ctx` to `fn` instead use of native `.bind`
 *
 * **Example**
 *
 * ```js
 * var smartBind = require('smart-bind')
 *
 * function zoopark () { return this.foo }
 *
 * var bound = smartBind({foo: 'bar'}, zoopark)
 *
 * console.log(bound()) // => 'bar'
 * console.log(bound.toString()) // => 'function zoopark () { return this.foo }'
 * ```
 *
 * @param  {Object|Function} `ctx`
 * @param  {Function} `fn`
 * @return {Function}
 * @api public
 */

module.exports = function smartBind (ctx, fn) {
  fn = typeof ctx === 'function' ? ctx : fn
  ctx = isObject(ctx) ? ctx : this

  if (typeof fn !== 'function') {
    throw new TypeError('smart-bind: expect `fn` be function')
  }

  return isBound(fn) ? fn : function bounded () {
    return fn.apply(this || ctx, arguments)
  }
}
