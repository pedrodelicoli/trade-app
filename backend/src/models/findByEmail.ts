import { connection } from './connection';

const findByEmail = async (email: string) => {
  return connection()
    .then((db: any) => db.collection('users').findOne({ email: email }));      
}

export { findByEmail };