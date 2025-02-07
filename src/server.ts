import express from 'express';
import http from 'http';
import { ExpressPeerServer } from 'peer';
import apiRoutes from './routes/api';

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;

const peerServer = ExpressPeerServer(server, {
    path: '/peerjs'
});

app.use('/', peerServer);

app.use(express.json());
app.use('/api', apiRoutes);

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
