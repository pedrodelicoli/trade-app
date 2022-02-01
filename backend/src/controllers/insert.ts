import {Response, Request, NextFunction} from 'express'
import { create } from "../services";


const insert = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, password } = req.body;
      const user = await create(name, email, password);
      return res.status(200).send(user);
    } catch (err) {
      next(err)
    }  
  }

export { insert };