/*!
 * smart-bind <https://github.com/tunnckoCore/smart-bind>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var utils = require('./utils')

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
  ctx = typeof ctx === 'function' ? null : ctx
  return utils.isBound(fn) ? fn : utils.rename(fn, utils.getName(fn), ctx || this)
}
