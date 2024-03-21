import React from 'react';
import './App.css';
import Blogs from './Pages/Blogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contactus from './Pages/Contactus';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contactus" element={<Contactus/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
