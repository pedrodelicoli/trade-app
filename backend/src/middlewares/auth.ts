import jwt from 'jsonwebtoken';
import {Response, Request, NextFunction} from 'express'
import { findByEmail } from '../models';
const { errorHandler } = require('../utils/errorhandler');

const secret = 'seusecretdetoken';

const erro401 = 401;

const errorName = {
  auth: 'missing auth token', 
  token: 'jwt malformed',
};

interface Idecode {
  data: string,
}

const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;
    let decoded: Idecode = {
      data: '',
    };
    if (!authorization) throw errorHandler(erro401, errorName.auth);
    jwt.verify(authorization, secret, (err: any, decode: any) => {
      if (err) throw errorHandler(erro401, errorName.token); 
      decoded = decode;    
    });  
    const user = await findByEmail(decoded.data);
    if(user) req.body = user.email;
    next();  
  } catch (err) {
    console.log(err)
    next(err);
  }
};

export { auth };