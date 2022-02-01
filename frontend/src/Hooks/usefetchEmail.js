import { useContext, useEffect } from 'react';
import api from '../services/api';
import Context from '../Context/Context';

const useFetchEmail = () => {
  const { userExist, setUser, login } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        api.post('/login', {
          email: login.emailLogin,
          password: login.passwordLogin })
          .then((response) => response.data)
          .then((data) => setUser({
            name: data.name,
            email: data.email,
            trades: data.trades,
          }));
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userExist]);
};

export default useFetchEmail;
