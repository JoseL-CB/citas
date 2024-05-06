import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './componets/Dashboard';
import Admin from './componets/Admin';
import AgregarUsuario from './componets/AgregarUsuario';
import Login from './componets/Login';

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



