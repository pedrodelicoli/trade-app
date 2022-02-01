import {Response, Request, NextFunction} from 'express'
import { findOne } from "../services";

interface Iuser {
  email: string,
  password: string,
}

const findEmail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const user: Iuser = { email, password }
    const findUser = await findOne(user);
    return res.status(200).send(findUser);
  } catch (err) {
    next(err)
  }  
}

export { findEmail };