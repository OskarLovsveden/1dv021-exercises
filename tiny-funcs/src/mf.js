/**
 * mf module.
 *
 * @module src/mf
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Returns the sum of two local variables.
 *
 * @returns {number} The result of an arithmetic operation.
 */
function add () {
  let a = 21
  let b = '21'

  // TODO: Write your code here.
  b = Number.parseInt(b)
  return a + b
}

/**
 * Returns a string combined of multiple local variables.
 *
 * @returns {string} The string 'I'm going to learn how to program in 9 weeks.'.
 */
function concat () {
  let message = `I'm going to learn how to program in`
  let time = 9
  let weeks = 'weeks.'

  // TODO: Write your code here.
  // Simple Concatenation
  return message + ' ' + time + ' ' + weeks
}

/**
 * Returns the sum of two local variables, rounded to the nearest integer.
 *
 * @returns {number} The sum of two variables rounded to the nearest integer.
 */
function round () {
  let firstNumber = 12.24
  let secondNumber = 29.27

  // TODO: Write your code here.
  // Adding up firstNumber and secondNumber and rounding it to its nearest integer.
  return Math.round(firstNumber + secondNumber)
}

/**
 * Returns a string with the sequence of odd numbers from one up to the value of the parameter.
 *
 * @param {number} max An integer greater than zero.
 * @returns {string} A string with comma separated odd values.
 */
function getOddNumbers (max) {
  // TODO: Write your code here.
  let result = ''

  for (var i = 1; i <= max; i += 2) {
    // If there is a number, add a comma.
    if (result.length > 0) {
      result += ', '
    }
    // add number.
    result += i
  } return result
}

/**
 * Returns a string with a greeting message according to the time of day.
 *
 * If hour is between 8 and 12 the message should be "Good morning!".
 * If hour is between 12 and 18 the message should be "Good afternoon!".
 * If hour is between 18 and 24 the message should be "Good evening!".
 * If hour is between 24 and 8 the message should be "Good night!".
 *
 * @returns {string} A greeting according to the time of day.
 */
function greetings () {
  let hour = new Date().getHours()

  // TODO: Write your code here.
  // Checks if time is between 8-12
  if (hour >= 8 && hour < 12) {
    return 'Good morning!'
  // Checks if time is between 12-18
  } else if (hour >= 12 && hour < 18) {
    return 'Good afternoon!'
  // Checks if time is between 18-24
  } else if (hour >= 18 && hour < 24) {
    return 'Good evening!'
  // Checks if time is between anything else not specified above
  } else {
    return 'Good night!'
  }
}

/**
 * Returns a string where all hyphens (-) is replaced by a space.
 *
 * @param {string} str  The string being searched and replaced on.
 * @returns {string} - A new string with all matches of a hyphen replaced by a space.
 */
function replaceHyphensFor (str) {
  // TODO: Write your code here.
  // Search and replace all '-' for ' ' globally.
  let noDash = str.replace(/-/g, ' ')
  return noDash
}

/**
 * Returns a string where all hyphens (-) is replaced by a space.
 *
 * @param {string} str  The string being searched and replaced on.
 * @returns {string} - A new string with all matches of a hyphen replaced by a space.
 */
function replaceHyphensWhile (str) {
  // TODO: Write your code here.
  let result = ''
  let i = 0

  // while loop runs while we havent processed all letters in str.
  while (i < str.length) {
    // new var = position of letter in str, based of i.
    let char = str.charAt(i)
    // if letter found = '-', add ' ' to result...
    if (char === '-') {
      result += ' '
      // ...else just add char to result.
    } else {
      result += char
    }
    // continue to next letter, by adding 1 to i.
    i++
  }
  // return the new string in result.
  return result
}

/**
 * Returns a string containing a few number sequences.
 *
 * @returns {string} - A string '11-12-13, 21-22-23, 31-32-33, 41-42-43, 51-52-53'.
 */
function getNumberSequence () {
  // TODO: Write your code here.

  let PAIR_MAX_VALUE = 5
  let NUMBER_MAX_VALUE = 3

  let result = ''

  // As long as PAIR_MAX_VALUE isnt maxed...
  for (let pair = 1; pair <= PAIR_MAX_VALUE; pair++) {
    // and as long as NUMBER _MAX_VALUE...()
    for (let number = 1; number <= NUMBER_MAX_VALUE; number++) {
      // add the corresponding value in order pair > number to result.
      result += pair.toString() + number.toString()
      // Add '-' between numbers.
      if (number !== NUMBER_MAX_VALUE) {
        result += '-'
      }
    }
    // Add ', ' after a number pair is complete.
    if (pair !== PAIR_MAX_VALUE) {
      result += ', '
    }
  }
  // Return the resulting string.
  return result
}

exports.add = add
exports.concat = concat
exports.round = round
exports.getOddNumbers = getOddNumbers
exports.greetings = greetings
exports.replaceHyphensFor = replaceHyphensFor
exports.replaceHyphensWhile = replaceHyphensWhile
exports.getNumberSequence = getNumberSequence
