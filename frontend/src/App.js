import React from 'react';
import './App.css';
import Analysis from './containers/Analysis';
import Header from './containers/Header';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="container">
        <Analysis />
      </div>
    </div>
  );
}

export default App;
