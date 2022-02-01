"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = require("./routes/router");
const error = require('./middlewares/error');
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const PORT = 3001;
const app = (0, express_1.default)();
const httpServer = http_1.default.createServer(app);
const io = new socket_io_1.default.Server(httpServer);
io.on('connection', (socket) => {
    console.log('new connection');
});
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(router_1.router);
app.use(error);
httpServer.listen(PORT);
