import {Response, Request, NextFunction} from 'express'
import { getByEmail } from "../models/findByEmail";

const findEmail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.params;
    const user = await getByEmail(email);
    if (!user) return res.status(404).send();
    return res.status(200).send(user);
  } catch (err) {
    next(err)
  }  
}

export { findEmail };