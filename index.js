// Servidor de express
const express = require('express')
const app = express()

// Servidor de Sockets
const server = require('http').createServer(app);

// Configuracion de Socket-Server
const io = require('socket.io')(server);

// Desplegar el directorio publico
app.use( express.static( __dirname + '/public' ) )


io.on('connection', () => {
  console.log(`Nuevo cliente conectado!`);
});


server.listen(3000, () => {
  console.log(`Server running on port: ${3000}`)
});
