/* import {Response, Request, NextFunction} from 'express'
import jwt from 'jsonwebtoken';
import { findByEmail } from '../models';
const { errorHandler } = require('../utils/errorhandler');

const secret = 'seusecretdetoken';

const erro401 = 401;

const errorName = {
  auth: 'missing auth token', 
  token: 'jwt malformed',
};

const auth = async (req: Request, _res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;
    let decoded = '';
    if (!authorization) throw errorHandler(erro401, errorName.auth);
    jwt.verify(authorization, secret, (err, decode) => {
      if (err) throw errorHandler(erro401, errorName.token); 
      decoded = decode;    
    });  
    await findByEmail(decoded.data);      
    next();  
  } catch (err) {
    next(err);
  }
};

module.exports = { auth }; */