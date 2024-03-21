import React from 'react';
import './App.css';
import Blogs from './Pages/Blogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
