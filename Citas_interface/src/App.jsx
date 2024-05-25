import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './vistas/Dashboard';
import Admin from './vistas/Admin';
import AgregarUsuario from './vistas/AgregarUsuario';
import Login from './vistas/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/agregar-usuario" element={<AgregarUsuario />} />
      </Routes>
    </Router>
  );
}

export default App;



