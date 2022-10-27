import React from "react";
import style from './Footer.module.css';
import zuri from '../../Assets/Zuri.Internship_Logo.svg';
import ingressive from '../../Assets/I4G.svg';
import HNG from '../../Assets/Footer text.svg';

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.content}>
        <img src={zuri} alt='zuri_logo' />
        <img src={HNG} alt='hng_logo' />
        <img src={ingressive} alt='IFG_logo' />
      </div>
    </div>
  )
};

export default Footer;