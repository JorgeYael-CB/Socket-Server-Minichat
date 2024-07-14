const Server = require("./models/sever");
const server = new Server();



server.execute()




// io.on('connection', ( socket ) => {
//   // console.log(`Nuevo cliente conectado!`);
//   // console.log(socket.id);

//   // socket.emit('mensaje-bienvenida', {
//   //   msg: 'Bienvenido al server',
//   //   fecha: new Date(),
//   // });

//   // socket.on('mensaje-client', ( data ) => {
//   //   console.log('El cliente emitio al servidor!')
//   //   console.log(data);
//   // });


//   socket.on('message-to-server', (data) => {
//     console.log(data)

//     io.emit('message-from-server', data);
//   })

// });



