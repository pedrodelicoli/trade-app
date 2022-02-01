import { useEffect, useContext } from 'react';
import api from '../services/api';
import Context from '../Context/Context';

const useFetchInsert = (user) => {
  const { add, setExists } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        api.post('/user/', user)
          .then((response) => setExists(response.status));
      } catch (err) {
        console.log(err);
      }
    };
    if (add !== '') fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [add]);
};

export default useFetchInsert;
