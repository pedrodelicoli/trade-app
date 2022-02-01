import { useContext, useEffect } from 'react';
import api from '../services/api';
import Context from '../Context/Context';

const useFetchEmail = () => {
  const { login, userExist, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        api.get(`/user/${login.emailLogin}`)
          .then((response) => response.data)
          .then((data) => setUser({
            name: data.name,
            email: data.email,
            password: data.password,
            trades: data.trades,
          }));
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, [userExist]);
};

export default useFetchEmail;
