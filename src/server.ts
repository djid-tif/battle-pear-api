import express from 'express';
import http from 'http';
import path from 'path';
import apiRoutes from './routes/api';

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/api', apiRoutes);

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
