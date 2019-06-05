'use strict';

/**
 * Read-Write Modue
 * @module modules/read-write
 * @exports Object - Object containing references to the read, uppercase, and write functions
 */

const util = require('util');
const fs = require('fs');
const readFileWithPromises = util.promisify(fs.readFile);
const writeFileWithPromises = util.promisify(fs.writeFile);

/**
 * read(file)
 * @param {*} file - File to read
 */
function read(file) {
  return readFileWithPromises(file)
    .then( data => {
      return data;
    });
}

/**
 * uppercase(data)
 * @param {String} data - String to be uppercased
 */
function uppercase(data) {
  return data.toString().toUpperCase();
}

/**
 * write(file, text)
 * @param {*} file - File to write to
 * @param {String} text - Uppercased string
 */
function write(file, text) {
  return writeFileWithPromises(file, Buffer.from(text))
    .then( () => {
      const saveMessage = `Saving ${file}`;
      return saveMessage;
    });
}

module.exports = {read, uppercase, write};