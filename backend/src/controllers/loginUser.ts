import {Response, Request, NextFunction} from 'express'
import { login } from "../services";

interface Iuser {
  email: string,
  password: string,
}

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const user: Iuser = { email, password }
    const token = await login(user);
    return res.status(200).send(token);
  } catch (err) {
    next(err)
  }  
}

export { loginUser };