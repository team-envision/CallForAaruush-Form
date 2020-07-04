import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  return (
    <div className='all'>
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
