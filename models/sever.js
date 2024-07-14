// Servidor de express
const express = require('express')
const http = require('http')
const io = require('socket.io')
const path = require('path');
const Sockets = require('./sockets');


class Server {

  constructor(){
    this.app = express();
    this.port = 3000;

    // HTTP-server
    this.server = http.createServer(this.app);

    //Config-sockets
    this.io = io(this.server, { /* Configuraciones */ });

    //Iniciar config de express
    this.config()

    //Inicializar sockets
    this.configSocket();
  }


  configSocket(){
    new Sockets( this.io );
  }


  config(){
    this.app.use( express.static( path.resolve(__dirname, '../public') ) )
  }


  execute(){
    this.server.listen(this.port, () => {
      console.log(`Server running on port: ${this.port}`)
    });
  }

}


module.exports = Server;