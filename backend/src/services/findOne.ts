import { findByEmail } from "../models";
import { errorHandler } from '../utils/errorhandler';

interface Iuser {
  email: string,
  password: string,
}

const findOne = async (user: Iuser) => {
  try {
    const findUser = await findByEmail(user.email);
    if (!findUser) throw errorHandler(404, 'usuário não encontrado');
    if (findUser.password !== user.password) throw errorHandler(401, 'senha incorreta');
    return {
      name: findUser.name,
      email: findUser.email,
      trades: findUser.trades,
    };
  } catch (err) {
    throw(err)
  }  
}

export { findOne };