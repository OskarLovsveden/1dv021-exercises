/**
 * Shape module.
 *
 * @module src/shape
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Returns a string representing a right triangle.
 *
 * @param {number} base The number of characters in the triangle's base.
 * @returns {string} A string of hash characters.
 */
function createRightTriangle (base) {
  // TODO: Write your code here.
  // Sets triangle to a string.
  let triangle = ''

  /* Sets row to a string with '#'. If row has fewer symbols than the number of base add that amount of '#'
  to triangle, with an ending '\n' to break for a new line. Ends by adding 1 more '#' to row. */
  for (let row = '#'; row.length <= base; row += '#') {
    triangle = triangle + row + '\n'
  }
  // Returns triangle as value to createRightTriangle.
  return triangle
}

exports.createRightTriangle = createRightTriangle
