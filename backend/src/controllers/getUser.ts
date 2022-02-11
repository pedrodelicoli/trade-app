import {Response, Request, NextFunction} from 'express'
import { findOne } from "../services";

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const email = req.body;
    const findUser = await findOne(email);
    return res.status(200).send(findUser);
  } catch (err) {
    console.log(err)
    next(err)
  }  
}

export { getUser };