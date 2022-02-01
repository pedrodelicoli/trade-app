import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../Context/Context';
import useFetchEmail from '../Hooks/usefetchEmail';
import Button from './Button';

const Header = () => {
  const navigate = useNavigate();
  const { user, setUser, setLogin } = useContext(Context);
  useFetchEmail();

  const handleClick = () => {
    setUser('');
    navigate('/');
    setLogin('');
  };
  return (
    <div className="headermainpage">
      <p className="user">
        {`Welcome  ${user.name}!!!`}
      </p>
      <p className="useremail">
        { user.email }
      </p>
      <Button
        buttonName="Log Out"
        disabled={false}
        handleClick={handleClick}
        className="logout-btn"
      />
    </div>
  );
};

export default Header;
