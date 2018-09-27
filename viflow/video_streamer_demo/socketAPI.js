var socket_io = require('socket.io');
var io = socket_io();
var socketAPI = {};

socketAPI.io = io;

io.on('connection', function(socket){
    console.log('A user connected');
});

socketAPI.sendNotification = function() {
    io.sockets.emit('hello', {msg: 'Hello World!'});
}

module.exports = socketAPI;