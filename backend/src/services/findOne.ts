import { findByEmail } from "../models";

const findOne = async (email: string) => {
  try {
    const findUser = await findByEmail(email);
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