import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Form from './components/Form';
import Domains from './components/domains';
import logo from './logo_white.png';

function App() {
  return (
    <div className='all'>
      <img src={logo} className='image' />

      <Header />
      <Domains />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
