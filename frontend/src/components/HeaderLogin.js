import React, { useContext } from 'react';
import Context from '../Context/Context';
import { Input, Button } from '.';
import useFetchLogin from '../Hooks/usefetchLogin';

const HeaderLogin = () => {
  const {
    setLogin, login, userExist, setUserExist, userSign
  } = useContext(Context);  
  useFetchLogin();
  const handleClick = () => {
    setUserExist(userExist + 1)  
  };

  const handleChange = ({ target: { id, value } }) => {
    setLogin({
      ...login,
      [id]: value,
    });  
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
