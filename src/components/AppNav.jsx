import React from 'react'
import { Link, NavLink } from "react-router-dom";

const AppNav = () => {
  return (
    <div className={`py-8 border shadow-lg text-end`}>
      <ul className="hidden md:grid md:grid-cols-3 place-items-center">
        <div className="gap-10 hidden md:flex">
          <NavLink to="todo">
            کارهایی <br className="hidden md:block lg:hidden" />
            که باید بکنم
          </NavLink>
          <NavLink to="completed">
            کارهایی <br className="hidden md:block lg:hidden" />
            که تکمیل کردم
          </NavLink>
        </div>
        <Link to="/">Perfect Code</Link>
        <a className="rotate-90 md:hidden">|||</a>
        <div className="gap-10 hidden md:flex">
          <NavLink to="profile">پروفایل</NavLink>
          <NavLink to="/">خانه</NavLink>
        </div>
      </ul>
    </div>
  );
};

export default AppNav