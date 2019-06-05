'use strict';

const readWrite = require('./modules/read-write.js');
const net = require('net');

const client = net.Socket();

const HOST_NAME = 'localhost';
const PORT = process.env.PORT || 3001;

client.connect(PORT, HOST_NAME, () => {
  console.log(`Socket connected`);
});

const events = {
  save: 'save',
  error: 'error',
};

/**
 * alterFile(file)
 * @param {*} file - File to read, uppercase, and write
 */
async function alterFile(file) {
  const data = await readWrite.read(file);
  const text = await readWrite.uppercase(data);
  const message = await readWrite.write(file, text);
  console.log(message);
  client.write(`${events.save}:${message}`);
}

let file = process.argv.slice(2).shift();

alterFile(file)
  .catch(err => {
    client.write(`${events.error}:an error has occured`);
  });
