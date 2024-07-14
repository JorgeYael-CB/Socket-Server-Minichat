// Servidor de express
const express = require('express')
const app = express()

// Servidor de Sockets
const server = require('http').createServer(app);

// Configuracion de Socket-Server
const io = require('socket.io')(server);

// Desplegar el directorio publico
app.use( express.static( __dirname + '/public' ) )


io.on('connection', ( socket ) => {
  // console.log(`Nuevo cliente conectado!`);
  // console.log(socket.id);

  // socket.emit('mensaje-bienvenida', {
  //   msg: 'Bienvenido al server',
  //   fecha: new Date(),
  // });

  // socket.on('mensaje-client', ( data ) => {
  //   console.log('El cliente emitio al servidor!')
  //   console.log(data);
  // });


  socket.on('message-to-server', (data) => {
    console.log(data)

    io.emit('message-from-server', data);
  })

});


server.listen(3000, () => {
  console.log(`Server running on port: ${3000}`)
});
