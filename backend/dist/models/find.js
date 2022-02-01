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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = void 0;
const connection_1 = require("./connection");
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return (0, connection_1.connection)()
        .then((db) => db.collection('users').find().toArray())
        .then((users) => users.map((user) => ({
        id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
    })));
});
exports.getAll = getAll;
