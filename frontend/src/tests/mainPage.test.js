import React from 'react';
import App from '../App';
import { screen, render} from '@testing-library/react';

const VALID_EMAIL = 'anyone@email.com';
const VALID_PASSWORD = '123456';

describe('Test the login page', () => {
  test('there is inputs to login and password and a button to login', () => {
    render(<App />);
    const email = screen.getByTestId('email-login')
    const password = screen.getByTestId('password-login')
    const button = screen.getByTestId('btn-login')
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument(); 
    expect(button).toBeInTheDocument();    
  });
});