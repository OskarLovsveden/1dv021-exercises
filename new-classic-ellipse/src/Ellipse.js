/**
 * @module Ellipse
 * This module contains the Ellipse
 *
 * @author Oskar Lövsveden
 * @version 1.0
 */

'use strict'

/**
 * Representing an Ellipse
 *
 * @class Ellipse
 */
class Ellipse {
  constructor (a, b) {
    /**
     * Represents the major axis of the ellipse
     *
     * @type {number} - A number
    */
    this.a = a

    /**
     * Represents the minor axis of the ellipse
     *
     * @type {number} - A number
    */
    this.b = b
  }

  /**
   * Returns the area of the Ellipse
   *
   * @returns {number} - The area of the Ellipse
   * @memberof Ellipse
   */
  getArea () {
    return Math.PI * Math.abs(this.a) * Math.abs(this.b)
  }

  /**
   * Returns the circumference of the Ellipse
   *
   * @returns {number} - The circumference of the Ellipse
   * @memberof Ellipse
   */
  getCircumference () {
    return Math.PI * Math.sqrt(2 * this.a * this.a + 2 * this.b * this.b)
  }

  /**
   * Returns a string of the current object
   *
   * @returns {string} - A string of the current object
   * @memberof Ellipse
   */
  toString () {
    return `a: ${this.a}, b: ${this.b}, area: ${this.getArea().toFixed(1)}, circumference: ${this.getCircumference().toFixed(1)}`
  }
}

// Exports
module.exports = Ellipse
