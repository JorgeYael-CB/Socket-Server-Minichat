
class Sockets {

  constructor( io ){
    this.io = io;

    this.socketEvents();
  }


  socketEvents(){
    // On Connection
    this.io.on('connection', ( socket ) => {

      //Escuchar evento del cliente
      socket.on('message-to-server', (data) => {
        console.log(data)

        //Mandar evento al cliente
        this.io.emit('message-from-server', data);
      })

    });
  }

}



module.exports = Sockets