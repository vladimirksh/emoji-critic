import React from 'react';
import './Header.css';
import Logo from './Logo';
import NavBar from './NavBar';
import ButtonBack from './ButtonBack';


function Header () {
  return (
    <div className="header">
      <Logo />
      <NavBar />
      <ButtonBack />
    </div>
  )
}

export default Header;