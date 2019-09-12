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
  let type = typeof data

  if (type === 'undefined') {
    result += 'n undefined value'

  } else if (type === 'string' ||
      type === 'number' ||
      type === 'boolean' ||
      type === 'function'
  ) {

    result += ` ${type}`
  } else if (Array.isArray(data)) {
    result += 'n array'
  
  } else if (type === ) {
    result += 'n null value'
  }

  return result
}

exports.tellType = tellType
