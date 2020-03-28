import app from './app';
import io from 'socket.io';

const PORT = parseInt(process.env.PORT || '5000');
const HOST = process.env.HOSTNAME || '0.0.0.0';

let server = app.listen(PORT, HOST, () => {
    console.log(`🚀  Server ready at http://${HOST}:${PORT}`);
});

const socket = io(server);
socket.on('connection', () => {
    /* Some logic */
});
