import React from 'react'
import { Outlet } from 'react-router-dom'
import AppNav from './AppNav';
import AppFooter from './AppFooter';

const Layout = () => {
  return (
    <div className='font-vazir' >
      <AppNav />
      <Outlet />
      <AppFooter />
    </div>
  );
}

export default Layout