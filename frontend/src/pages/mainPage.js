import React from 'react';
import { Header, Display } from '../components';
import Table from '../components/Table';

const MainPage = () => {
  return (
    <div className='bodymainpage'>
      <Header />
      <div className='sigin-body'>
        <Display />
        <Table />
      </div>
    </div>
  );
};

export default MainPage;
