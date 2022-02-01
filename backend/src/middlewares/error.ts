import { Response } from 'express';

module.exports = (err: any, res: Response ) => {
	console.log(err.message);
    res.status(500).end();
}