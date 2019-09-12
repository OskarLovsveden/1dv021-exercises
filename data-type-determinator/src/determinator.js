/**
 * Determinator module.
 *
 * @module src/determinator
 * @author John Häggerud
 * @author Mast Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Returns a string indicating the type of the data sent to the function.
 *
 * @param {*} data The data whose type is to be returned.
 * @returns {string} The data type of the parameter.
 */
function tellType (data) {

  let result = 'You sent me a'
  // Gets the type of data as a 'string'.
  let type = typeof data

  // if type = 'undefined'...
  if (type === 'undefined') {
    result += 'n undefined value.'

    // else if type = 'string', 'number', 'boolean' or 'function'...
  } else if (type === 'string' ||
      type === 'number' ||
      type === 'boolean' ||
      type === 'function'
  ) {

    result += ` ${type}.`
    // else if type = 'object' check if...
  } else if (type === 'object') {
    // 'object' is an array...
    if (Array.isArray(data)) {
      result += 'n array.'
      // a value of 'null'...
    } else if (data === null) {
      result += ' null value.'
      // or just a "normal" 'object'.
    } else {
      result += 'n object.'
    }
  }

  // Return the result of what we found.
  return result
}

exports.tellType = tellType
