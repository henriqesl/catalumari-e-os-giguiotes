// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './components/MainLayout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Sobre from './pages/Sobre'; 
import Espetaculos from './pages/espetaculos/Espetaculos';
import Grupo from './pages/grupo/Grupo';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="espetaculos" element={<Espetaculos />} />
          <Route path="grupo" element={<Grupo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;