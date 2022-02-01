import React, { useState, useContext } from 'react';
import Context from '../Context/Context';
import useFetchInsert from '../Hooks/usefetchInsert';
import Button from './Button';
import Input from './Input';

const Form = () => {
  const { setAdd, add, exists } = useContext(Context);
  const [userSign, setUserSign] = useState({
    name: '',
    email: '',
    password: '',
  });
  const user = {
    name: userSign.name,
    email: userSign.email,
    password: userSign.password,
  };
  useFetchInsert(user);

  const handleChange = ({ target: { id, value } }) => {
    setUserSign({
      ...userSign,
      [id]: value,
    });
  };

  const handleClick = () => {
    add === false ? setAdd(true) : setAdd(false);
  };

  const validateEmail = () => {
    const emailCorrect = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return emailCorrect.test(userSign.email);
  };

  const passwordCorrect = () => {
    const passwordLength = 6;
    if (userSign.password !== undefined && userSign.password.length >= passwordLength) {
      return true;
    }
    return false;
  };

  return (
    <div>
      <form className="sign-form">
        <p className="text-form">Invest with the best!</p>
        <Input
          inputType="text"
          labelText="Name"
          id="name"
          handleChange={handleChange}
          placeholder="Name"
          className="input"
          testId="name-form"
        />
        <Input
          inputType="text"
          labelText="Email"
          id="email"
          handleChange={handleChange}
          placeholder="Email"
          className="input"
          testId="email-form"
        />
        <Input
          inputType="password"
          labelText="Password"
          id="password"
          handleChange={handleChange}
          placeholder="Password"
          className="input"
          testId="password-form"
        />
        <Button
          buttonName="Sign Up"
          handleClick={handleClick}
          disabled={!(validateEmail() && passwordCorrect())}
          className="form-btn"
          testId="btn-form"
        />
        { exists === 201 ? <span data-testid="signfail"> User already signUp </span> : null }
        { exists === 200 ? <span data-testid="signsuccess"> Successfully Signed In! </span> : null }
        <p className="text-form">Trade with the Global Forex Trading Specialist</p>
      </form>
    </div>
  );
};

export default Form;
