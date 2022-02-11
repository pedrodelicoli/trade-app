import { useContext, useEffect } from 'react';
import api from '../services/api';
import Context from '../Context/Context';

const useFetchEmail = () => {
  const { userExist, setUser, token } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        api.get('/user', {
          headers: {
            authorization: token
          } 
        })
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
