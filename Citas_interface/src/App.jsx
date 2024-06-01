import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './vistas/Dashboard';
import Admin from './vistas/Admin';
import Login from './vistas/Login';
import Admindash from './vistas/Admindash';
import RecepcionistaDashboard from './vistas/RecepcionistaDasboard';
import News from './vistas/News';
import Events from './vistas/Events';
import Reporst from './vistas/Reporst';
import AgregarUsuario from './vistas/AgregarUsuario';
import ModificarUsuario from './vistas/ModificarUsuario';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/ultimasNoticias" element={<News />} />
        <Route path="/eventos" element={<Events />} />
        <Route path="/informes" element={<Reporst />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/Admindash" element={<Admindash />} /> 
        <Route path="/Recepcionista" element={<RecepcionistaDashboard />} />       
        <Route path="/login" element={<Login />} />
        <Route path="/agregar-usuario" element={<AgregarUsuario />} />
        <Route path="/modificar-usuario/:id" element={<ModificarUsuario />} /> 
      </Routes>
    </Router>
  );
}

export default App;
