/**
 * @module src/Circle
 * This module contains the Circle
 *
 * @author Oskar Lövsveden
 * @version 1.0
 */

'use strict'

const Ellipse = require('./Ellipse')

/**
 * Representing a circle.
 *
 * @class Circle
 * @extends {Ellipse}
 */
class Circle extends Ellipse {
  /**
   * Creates a javascript circle instance representing a circle.
   *
   * @param {number} radius - The radius of the circle
   * @constructor
  */
  constructor (radius) {
    super(radius, radius)
  }

  get radius () {
    return this.a
  }

  set radius (value) {
    this.a = this.b = value
  }

  /**
   * Returns a string representing the circle
   *
   * @returns {string} - A string representing the circle
   * @memberof Circle
   */
  toString () {
    return `radius: ${this.radius}, area: ${this.getArea().toFixed(1)}, circumference: ${this.getCircumference().toFixed(1)}`
  }
}

// Exports
module.exports = Circle
