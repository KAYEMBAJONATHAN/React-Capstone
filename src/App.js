import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Details from './Component/Details';
import Home from './Component/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/details" element={<Details />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
