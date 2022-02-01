import { useEffect, useContext } from 'react';
import api from '../services/api';
import Context from '../Context/Context';

const useFetchUpdate = () => {
  const { user, update } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        api.put('/user/', user)
          .then((response) => console.log(response.status));
      } catch (err) {
        console.log(err);
      }
    };
    if (update !== null) fetchUser();
  }, [update]);
};

export default useFetchUpdate;
