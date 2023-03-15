import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Components/Header/Header';

const Layout = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Outlet />
      </div>
      <footer>Footer - 2023</footer>
    </>
  );
};

export default Layout;
