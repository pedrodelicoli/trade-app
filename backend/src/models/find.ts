import { connection } from './connection';

interface Iuser {
  _id: number;
  name: string;
  email: string;
  password: string;
  trades: any;
}
const getAll = async () => {
  return connection()
    .then((db: any) => db.collection('users').find().toArray())
      .then((users: any) =>
        users.map((user: Iuser) =>
          ({
             id: user._id,
             name: user.name,
             email: user.email,
             password: user.password,
             trades: user.trades,
           })
        )
      );
}

export { getAll };