import React from 'react';
import paifjlogo from '../assets/paifjlogo.jpeg';
import style from '../style/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={style.navBarContainer}>
      
      <img className={style.navBarLogo} src={paifjlogo} alt="PAIFJLogo" />
      
      </div>
  );
};

export default Navbar;
