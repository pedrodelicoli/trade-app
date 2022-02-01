import {Response, Request, NextFunction} from 'express'
import { getAll } from "../models/find";


const findAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await getAll();
      return res.status(200).send(users);
    } catch (err) {
      next(err)
    }  
  }

export { findAll };