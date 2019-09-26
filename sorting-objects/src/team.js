/**
 * Team module.
 *
 * @module src/team
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
   *  Sorts the team objects of an array in place and returns the array. The team
   *  objects is sorted by descending points.
   *
   * @param {Object[]} teams An unordered array of team objects.
   * @returns {Object[]} An ordered array of team objects.
   */
function sortByPoints (teams) {
  if (!Array.isArray(teams)) {
    throw new TypeError('The source parameter must be an Array.')
  }

  const copy = teams.splice(0)
  copy.sort((a, b) => a.points - b.points).reverse()
  return copy
}

module.exports.sortByPoints = sortByPoints
