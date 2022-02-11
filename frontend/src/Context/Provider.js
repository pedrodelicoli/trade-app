import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider(props) {
  const [login, setLogin] = useState();
  const [user, setUser] = useState([]);
  const [add, setAdd] = useState('');
  const [gpbToUsd, setGpbToUsd] = useState([]);
  const [usdToGpb, setUsdToGpb] = useState([]);
  const [userExist, setUserExist] = useState(0);
  const [exists, setExists] = useState('');
  const [update, setUpdate] = useState(null);
  const [amount, setAmount] = useState(0);
  const [userSign, setUserSign] = useState();
  const [token, setToken] = useState();

  const { children } = props;
  const contextValue = {
    login,
    setLogin,
    user,
    setUser,
    userExist,
    setUserExist,
    exists,
    setExists,
    add,
    setAdd,
    gpbToUsd,
    setGpbToUsd,
    usdToGpb,
    setUsdToGpb,
    update,
    setUpdate,
    amount,
    setAmount,
    userSign, 
    setUserSign,
    token,
    setToken
  };

  return (
    <Context.Provider value={contextValue}>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
