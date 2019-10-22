/**
 * @module Circle
 * This module contains the Circle
 *
 * @author Oskar Lövsveden
 * @version 1.0
 */

'use strict'

const Ellipse = require('./Ellipse')

class Circle extends Ellipse {
  constructor (radius) {
    super(radius, radius)
  }

  get radius () {
    return this.a
  }

  set radius (value) {
    this.a = this.b = value
  }

  toString () {
    return `radius: ${this.radius}, area: ${this.getArea().toFixed(1)}, circumference: ${this.getCircumference().toFixed(1)}`
  }
}

// Exports
module.exports = Circle
