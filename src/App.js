import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import HoaDon from './components/HoaDon';

function App() {
  const [bill, setBill] = useState(true);
  return (
    <div className="container-fluid">
      <Header bill={bill} setBill={setBill} />
      <div className="container">
        <HoaDon bill={bill} />
      </div>
    </div>
  );
}

export default App;
