const socketIOClient = require("socket.io-client");

const socket = socketIOClient(`http://localhost:${process.env.PORT}`);

socket.emit('test', 'test');
console.log("End.");
