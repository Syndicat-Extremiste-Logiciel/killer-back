import io from 'socket.io';
import http from 'http';

class Socket {
    _server: http.Server;
    _io: io.Server;

    constructor(server: http.Server) {
        this._server = server;
        this._io = io(server);
    }

    listen = () => {
        console.log("Socket instanciated.");
        this._io.on("connection", (socket: io.Socket) => {
            console.log("Connected");
            socket.on('test', function(msg) {
                console.log(`[TEST MESSAGE]: ${msg}`);
              });
        });

    }
}

export default Socket;
