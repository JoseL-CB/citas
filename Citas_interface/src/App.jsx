import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './vistas/Dashboard';
import Admin from './vistas/Admin';
import Login from './vistas/Login';
import AgregarUsuario from './vistas/AgregarUsuario';
import ModificarUsuario from './vistas/ModificarUsuario'; // Importa la vista ModificarUsuario

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/agregar-usuario" element={<AgregarUsuario />} />
        <Route path="/modificar-usuario/:id" element={<ModificarUsuario />} /> 
      </Routes>
    </Router>
  );
}

export default App;
