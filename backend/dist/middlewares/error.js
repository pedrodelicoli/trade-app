"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (err, res) => {
    console.log(err.message);
    res.status(500).end();
};
