'use strict';

const net = require('net');

const client = net.Socket();

const HOST_NAME = 'localhost';
const PORT = process.env.PORT || 3001;

const allowedEvents = {
  save: 'save',
  error: 'error',
};

client.connect(PORT, HOST_NAME, () => {
  console.log(`Socket connected`);
});

client.on('save', (message) => {
  console.log(message);
});

client.on('data', (buffer) => {
  let text = buffer.toString().trim();
  const [event, message] = text.split(':');

  if(event === allowedEvents.save) {
    console.log(event, message);
  }

  if(event === allowedEvents.error) {
    console.error(event, message);
  }
});