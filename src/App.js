import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Page/Home';
import React from 'react';

export default function App() { 
  const BASE_NAME = "/hotel_qrcode";
  
  return (
    <div className="App">
      <Routes basename={BASE_NAME}>
        <Route path={BASE_NAME+"/*"} element={<Home />}></Route>
      </Routes>
    </div>
  );
}
