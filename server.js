const express = require("express");
const socketIO = require("socket.io");
const http = require("http");
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

io.on("connection", (socket) => {
  console.log("New user Connected");

  socket.emit('newMessage', {
    from: 'moses@m1',
    text: 'hepppp',
    createdAt: 123
  });

  socket.on('createMessage',(newMessage) => {
    console.log('newMessage', newMessage);
  });

  socket.on('disconected',() => {
    console.log('disconnected from user');
  });
});

server.listen(port);