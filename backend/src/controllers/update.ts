import {Response, Request, NextFunction} from 'express'
import { updateOne } from "../models/updateOne";

const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, trades } = req.body;
      console.log(req.body)
      const user = { email, trades };
      await updateOne(user);
      return res.status(200).send(user);
    } catch (err) {
      next(err)
    }  
  }

export { update };