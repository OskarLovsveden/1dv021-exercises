/**
 * Module for lego part 4.
 *
 * @module src/lego-4-class
 * @author Johan Leitet
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Represents a lego brick.
 */
class LegoBrick {
  /**
   *
   * Creates an instance of LegoBrick.
   *
   * @param {number} [x = 2] the horizontal number of knobs on the block
   * @param {number} [y = 4] the vertical number of knobs on the block
   * @memberof LegoBrick
   */
  constructor (x = 2, y = 4, color = 'red') {
    this.x = x
    this.y = y
    this.color = color
  }

  /**
   * Renders the object to the console.
   */
  render () {
    console.log(this.toString())
  }

  /**
   * returns a string representing the object
   *
   * @returns {string} a string representing the object
   */
  toString () {
    let str = ''

    for (let y = 0; y < this.y; y++) {
      for (let x = 0; x < this.x; x++) {
        str += '®'
        if (x < this.x - 1) {
          str += ' '
        }
      }

      if (y < this.y - 1) {
        str += '\n'
      }
    }

    return str
  }
}

// Exports
module.exports = LegoBrick
