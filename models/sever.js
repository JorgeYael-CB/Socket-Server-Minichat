// Servidor de express
const express = require('express')
const http = require('http')
const io = require('socket.io')
const path = require('path')


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