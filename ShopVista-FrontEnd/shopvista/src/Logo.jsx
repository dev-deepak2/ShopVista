import React from 'react';
import { useNavigate } from 'react-router-dom';
import shopVistaLogo from './shopvista-logo.png';
import './assets/style.css';

export default function Logo() { 

  const navigate = useNavigate();


  return (
    <div className="logo-container" onClick= {() => navigate('/customerhome')}>

      <img src={shopVistaLogo} alt="ShopVista Logo"
       className="logo-image" />
      
      <span className="logo-text">ShopVista</span>
    </div>
  );
}
