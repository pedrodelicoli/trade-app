import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen, render, mockImplementation } from '@testing-library/react';
import axios from 'axios';
import App from '../App';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';



const VALID_EMAIL = 'anyone@email.com';
const VALID_PASSWORD = '123456';

describe('Test the login page', () => {
  it('there are inputs to login and password and a button to login', () => {
    render(<App/>);
    const email = screen.getByTestId('email-login');
    const password = screen.getByTestId('password-login');
    const button = screen.getByTestId('btn-login');
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument(); 
    expect(button).toBeInTheDocument();        
  });
  it('there are inputs to signin as a new user', () => {
    render(<App />);
    const name = screen.getByTestId('name-form');
    const email = screen.getByTestId('email-form');
    const password = screen.getByTestId('password-form');
    const button = screen.getByTestId('btn-form');
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument(); 
    expect(button).toBeDisabled();         
  });
  it('cant signin a new user if email or password is wrong', () => {
    render(<App/>);
    const email = screen.getByTestId('email-form');
    const password = screen.getByTestId('password-form');
    const button = screen.getByTestId('btn-form');  
    userEvent.type(email, 'email');
    userEvent.type(password, VALID_PASSWORD);
    expect(button).toBeDisabled();

    userEvent.type(email, 'email@com@');
    userEvent.type(password, VALID_PASSWORD);
    expect(button).toBeDisabled();

    userEvent.type(email, 'emailcom@');
    userEvent.type(password, VALID_PASSWORD);
    expect(button).toBeDisabled();

    userEvent.type(email, 'some@email.');
    userEvent.type(password, VALID_PASSWORD);
    expect(button).toBeDisabled(); 
    
    userEvent.type(email, VALID_EMAIL);
    userEvent.type(password, '23456');
    expect(button).toBeDisabled();
  });
  it('can signin when email and password is in the right format', () => {
    render(<App />);
    const email = screen.getByTestId('email-form');
    const password = screen.getByTestId('password-form');
    const button = screen.getByTestId('btn-form');
    userEvent.type(email, VALID_EMAIL);
    userEvent.type(password, VALID_PASSWORD);
    expect(button).not.toBeDisabled();
  });
  it('sign new user successfully', () => {
      render(<App />);
      const api = jest.mock('axios');
      api.post = jest.fn();
      api.post.mockImplementation(() => ({ status: 200 }));
      const email = screen.getByTestId('email-form');
      const password = screen.getByTestId('password-form');
      const button = screen.getByTestId('btn-form');
      userEvent.type(email, VALID_EMAIL);
      userEvent.type(password, VALID_PASSWORD);
      expect(button).not.toBeDisabled();
      userEvent.click(button);
      const success = screen.getByTestId('signsuccess');
      expect(success).toBeInTheDocument(); 
  })
  it('login new user successfully', () => {
    render(<App />);
    jest.mock('axios');
    axios.get = jest.fn();
    axios.get.mockImplementation(() => ({ data: {
      email: VALID_EMAIL,
      password: VALID_PASSWORD
    } }));
    const email = screen.getByTestId('email-login');
    const password = screen.getByTestId('password-login');
    const button = screen.getByTestId('btn-login');
    userEvent.type(email, VALID_EMAIL);
    userEvent.type(password, VALID_PASSWORD);
    userEvent.click(button);        
})
});
