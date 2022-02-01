"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const { MongoClient } = require('mongodb');
const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';
let db = null;
const connection = () => {
    return db
        ? Promise.resolve(db)
        : MongoClient.connect(MONGO_DB_URL, OPTIONS)
            .then((conn) => {
            db = conn.db('forex_users');
            return db;
        });
};
exports.connection = connection;
