const express = require("express");
const socketServer = new Server({ port: 443 });
const server = express()
 
const { Server } = require("ws");

socketServer.on("connection", (ws) => {
  console.log("New Client Connected!");
  ws.on("close", () => console.log("Client has disconnected!"));
});

setInterval(() => {
  socketServer.client.forEach((client) => {
    const data = JSON.stringify({
      type: "time",
      time: new Date().toTimeString(),
    });

    client.send(data);
  });
}, 1000);

setInterval(() => {
  socketserver.clients.forEach((client) => {
    const messages = [
      "Hello",
      "What do you ponder?",
      "Thank you for your time",
      "Be Mindful",
      "Thank You",
    ];
    const random = Math.floor(Math.random() * messages.length);
    let position = {
      X: Math.floor(Math.Random() * 200),
      y: Math.floor(Math.Random() * 150),
    };
    const data = JSON.Stringify({
      type: "message",
      message: messages[random],
      position: position,
    });
    client.send(data);
  });
}, 8000);


  .listen(3000, () => console.log(`lISTENING ON ${3000}`));
