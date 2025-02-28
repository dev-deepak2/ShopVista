import React from 'react'
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { AppRoutes } from './Routes';
import './assets/style.css';

function App() {

  return (
   <Router>
      <AppRoutes/>
   </Router>
  );
}

export default App
