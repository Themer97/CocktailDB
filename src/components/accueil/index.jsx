import React, { useState, useEffect } from 'react';
import Header from './header';
import Popular from './popular';
import './Accueil.scss';
import Navbar from '../layout/Navbar';

const Accueil = ({ themeMode }) => {
  return (
    <div className={`accueil_container ${themeMode}`}>
      <Header />
      <Popular />
    </div>
  );
};

export default Accueil;
