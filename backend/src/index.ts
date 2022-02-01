import express from 'express';
import { router } from './routes/router';
const error = require('./middlewares/error');
import socketio from 'socket.io';
import WebSocket from 'ws';
import http from 'http';
import cors from 'cors';

const PORT = 3001;
const app = express();

const httpServer = http.createServer(app);
const io = new socketio.Server(httpServer);
const wsGbpToUsd = new WebSocket('wss://stream.binance.com:9443/ws/gbpusdt@trade')

let data = '';
wsGbpToUsd.onmessage = (event) => {
  data = JSON.parse(event.data.toString());  
}
io.on('connect', (socket) => {
  socket.emit('data', data)
  socket.on('connected', () => 
  socket.emit('data', data))
})
app.use(express.json());
app.use(cors());
app.use(router);
app.use(error)

httpServer.listen(PORT);