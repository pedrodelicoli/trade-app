import { connection } from './connection';

interface Iuser {
    email: string,
    trades: object[],
}

const updateOne = async (user: Iuser) => {
  const { email, trades } = user;
  await (await connection()).collection('users').updateOne(
    { "email": email },
    { $set: { trades }});      
}

export { updateOne };