import {Response, Request, NextFunction} from 'express'
import { updateUser } from "../services";

const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, trades } = req.body;
      const user = { email, trades };
      await updateUser(user);
      return res.status(200).send(user);
    } catch (err) {
      next(err)
    }  
  }

export { update };