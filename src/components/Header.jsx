import React, { useState } from "react";
import logo from "../assets/shared/logo.svg";
import iconhamburger from "../assets/shared/iconhamburger.svg";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className='header'>
      <Link to='/'>
        <img src={logo} alt='logoSpace' className='header__logo' />
      </Link>
      <img
        src={iconhamburger}
        alt='hamburger'
        className='header__hamburger'
        onClick={() => setShowNav(!showNav)}
      />

      <nav
        className={`${showNav ? "header__navResponsive" : "close"} header__nav`}
      >
        <ul className='header__ul'>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? "active" : "header__li")}
            onClick={() => setShowNav(!showNav)}
          >
            <span className='header__numberLink'>00</span> HOME
          </NavLink>
          <NavLink
            to='/destination'
            className={({ isActive }) => (isActive ? "active" : "header__li")}
            onClick={() => setShowNav(!showNav)}
          >
            <span className='header__numberLink'>01</span> DESTINATION
          </NavLink>
          <NavLink
            to='/crew'
            className={({ isActive }) => (isActive ? "active" : "header__li")}
            onClick={() => setShowNav(!showNav)}
          >
            <span className='header__numberLink'>02</span> CREW
          </NavLink>
          <NavLink
            to='/technology'
            className={({ isActive }) => (isActive ? "active" : "header__li")}
            onClick={() => setShowNav(!showNav)}
          >
            <span className='header__numberLink'>03</span> TECHNOLOGY
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};
