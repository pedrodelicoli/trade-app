import { insertOne, findByEmail } from "../models";
import { errorHandler } from '../utils/errorhandler';

const erro400 = 400;


const errorName = {
  user: 'Usuário já existe',       
};

const create = async (name: string, email: string, password: string) => {
    try {
      const trades: any[] = [];
      const userExist = await findByEmail(email);
      const user = { name, email, password, trades };
      if (userExist) throw errorHandler(erro400, errorName.user) 
      const newUser = await insertOne(user);
      return newUser;
    } catch (err) {
      throw(err)
    }  
  }

export { create };  