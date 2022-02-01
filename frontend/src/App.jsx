import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Provider from './Context/Provider';
import './App.css';
import { Login, MainPage } from './pages';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/trade" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
