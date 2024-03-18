import React from 'react';
import Home from './Home';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div className=''>
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
