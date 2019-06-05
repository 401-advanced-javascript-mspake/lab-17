'use strict';

const util = require('util');
const fs = require('fs');
const readFileWithPromises = util.promisify(fs.readFile);
const writeFileWithPromises = util.promisify(fs.writeFile);


function read(file) {
  return readFileWithPromises(file)
    .then( data => {
      return data;
    });
}

function uppercase(data) {
  return data.toString().toUpperCase();
}

function write(file, text) {
  return writeFileWithPromises(file, Buffer.from(text))
    .then( () => {
      const saveMessage = `Saving ${file}`;
      return saveMessage;
    });
}

module.exports = {read, uppercase, write};