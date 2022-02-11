import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import Context from '../Context/Context';

const useFetchEmail = () => {
  const navigate = useNavigate();
  const { userExist, login, setUserSign, setToken } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await api.post('/login', {
          email: login.emailLogin,
          password: login.passwordLogin })
          .then((response) => {
            setToken(response.data.token)  
            setUserSign(true);
            navigate('/trade');
          })
          .catch((err) => {
            if(err.response.status === 401)
            setUserSign(false);
          })     
      } catch (err) {
        console.log(err);
      }
    };
    if (login) fetchUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userExist]);
};

export default useFetchEmail;