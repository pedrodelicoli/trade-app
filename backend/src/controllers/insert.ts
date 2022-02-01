import {Response, Request, NextFunction} from 'express'
import { getByEmail } from "../models/findByEmail";
import { insertOne } from "../models/insertOne";

const insert = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const trades: any[] = [];
      const { name, email, password } = req.body;
      const userExist = await getByEmail(email);
      const user = { name, email, password, trades };
      if (userExist) {
        return res.status(201).send();
      } 
      await insertOne(user);
      return res.status(200).send(user);
    } catch (err) {
      next(err)
    }  
  }

export { insert };