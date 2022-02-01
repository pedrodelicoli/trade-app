import { connection } from './connection';

const getByEmail = async (email: string) => {
  return connection()
    .then((db: any) => db.collection('users').findOne({ email: email }));      
}

export { getByEmail };