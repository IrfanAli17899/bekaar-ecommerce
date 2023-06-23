import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomeView from './views/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeView />} />
    </Routes>
  );
}

export default App;
