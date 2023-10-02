import './App.css';
import Home from './components/Page/Home';
import React from 'react';

export default function App() { 
  var url = window.location.pathname;
  console.log(url)

  return (
    <div className="App">
      <Home />
    </div>
  );
}
