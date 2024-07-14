// Servidor de express
const app = require('express')();

// Servidor de Sockets
const server = require('http').createServer(app);

// Configuracion de Socket-Server
const io = require('socket.io')(server);


io.on('connection', () => {
  console.log(`Nuevo cliente conectado!`);
});


server.listen(3000, () => {
  console.log(`Server running on port: ${3000}`)
});
