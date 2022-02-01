"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const find_1 = require("../models/find");
const findByEmail_1 = require("../models/findByEmail");
const insertOne_1 = require("../models/insertOne");
const router = express_1.default.Router();
exports.router = router;
router.get('/user', (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, find_1.getAll)();
        return res.status(200).send(users);
    }
    catch (err) {
        next(err);
    }
}));
router.get('/user/:email', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.params;
        const user = yield (0, findByEmail_1.getByEmail)(email);
        return res.status(200).send(user);
    }
    catch (err) {
        next(err);
    }
}));
router.post('/user', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user } = req.body;
        const insertUser = yield (0, insertOne_1.insertOne)(user);
        return res.status(200).send(user);
    }
    catch (err) {
        next(err);
    }
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.send("Pedro Delicoli");
}));
router.post('/user', (req, res) => {
    return res.status(200).send('user created');
});
