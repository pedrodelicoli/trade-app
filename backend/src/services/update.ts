import { updateOne } from "../models";

interface Iuser {
    email: string,
    trades: object[],
}

const updateUser = async (user: Iuser) => {
  await updateOne(user);
}

export { updateUser }