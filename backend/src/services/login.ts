import { findByEmail } from "../models";
import jwt from 'jsonwebtoken'; 
import { errorHandler } from '../utils/errorhandler';


const erro404 = 400;
const erro401 = 401;

const errorName = {
  user: 'Usuário não encontrado',
  password: 'Senha Incorreta',       
};

const secret = 'seusecretdetoken';

const jwtConfig: any = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

interface Iuser {
  email: string,
  password: string,
}

const login = async (user: Iuser) => {
  try {
    const findUser = await findByEmail(user.email);
    if (!findUser) throw errorHandler(erro404, errorName.user);
    if (findUser.password !== user.password) throw errorHandler(erro401, errorName.password);
    const token = jwt.sign({ data: user.email }, secret, jwtConfig);
    return { token };
  } catch (err) {
    throw(err)
  }  
}

export { login };