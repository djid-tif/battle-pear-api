import express from 'express';
import http from 'http';
import apiRoutes from './routes/api';
import cors from 'cors';

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use('/api', apiRoutes);

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
