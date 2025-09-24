import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Ventas from './components/Ventas';
import Arriendos from './components/Arriendos';
import Administracion from './components/Administracion';
import Contacto from './components/Contacto';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ventas" element={<Ventas />} />
            <Route path="/arriendos" element={<Arriendos />} />
            <Route path="/administracion" element={<Administracion />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
