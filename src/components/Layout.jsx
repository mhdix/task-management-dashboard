import React from 'react'
import { Outlet } from 'react-router-dom'
import AppNav from './AppNav';
import Footer from './Footer';

const Layout = () => {
  return (
    <div>
      <AppNav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout