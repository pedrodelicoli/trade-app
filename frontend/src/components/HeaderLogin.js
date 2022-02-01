import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../Context/Context';
import { Input, Button } from '.';
import useFetchEmail from '../Hooks/usefetchEmail';

const HeaderLogin = () => {
  const navigate = useNavigate();
  const {
    user, setLogin, login, userExist, setUserExist,
  } = useContext(Context);
  const [userSign, setUserSign] = useState(true);
  useFetchEmail();
  const handleClick = () => {
    if (user.password && (user.password).toString() === (login.passwordLogin).toString()) {
      setUserSign(true);
      navigate('/trade');
    }
    setUserSign(false);
  };

  const handleChange = ({ target: { id, value } }) => {
    setLogin({
      ...login,
      [id]: value,
    });
    userExist === false ? setUserExist(true) : setUserExist(false)
  };

  return (
    <div className="header">
      <div className="emailogin">
        <Input
          id="emailLogin"
          placeholder="Email"
          labelText="Email"
          inputType="text"
          handleChange={handleChange}
          className="label"
          testId="email-login"
        />
      </div>
      <div className="passwordlogin">
        <Input
          id="passwordLogin"
          labelText="Password"
          placeholder="Password"
          inputType="password"
          handleChange={handleChange}
          className="label"
          testId="password-login"

        />
      </div>
      <div className="btn-submit">
        <Button
          buttonName="Log In"
          disabled={false}
          handleClick={handleClick}
          className="login-btn"
          testId='btn-login'
        />
      </div>
      {userSign === false ? <span className="auth">Authentication Failed</span> : null}
    </div>
  );
};

export default HeaderLogin;
