/**
 * Module for Circle.
 *
 * @module src/Ellipse
 * @author Oskar Lövsveden
 * @version 1.0
 */

'use strict'

const Ellipse = require('./Ellipse')

function Circle (radius) {
  Ellipse.call(this, radius, radius)

  Object.defineProperty(this, 'radius', {
    enumerable: true,
    configurable: true,
    get: function () {
      return this.a
    },
    set: function (value) {
      this.a = this.b = value
    }
  })
}

Circle.prototype = Object.create(Ellipse.prototype)
Circle.prototype.constructor = Circle
