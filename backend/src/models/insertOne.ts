import { connection } from './connection';

const insertOne = async (user: object) => {
  await (await connection()).collection('users').insertOne(user);      
}

export { insertOne };