import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LifeBalance from './lifebalance/LifeBalance';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LifeBalance />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
