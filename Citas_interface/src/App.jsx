import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './vistas/Dashboard';
import Admin from './vistas/Admin';
import ModuloVisitante from './vistas/ModuloVisitante'
import ModuloHabitacion from './vistas/ModuloHabitacion'
import Login from './vistas/Login';
import Admindash from './vistas/Admindash';
import RecepcionistaDashboard from './vistas/RecepcionistaDashboard';
import GuardaDahboard from './vistas/GuardaDashboard'
import News from './vistas/News';
import Events from './vistas/Events';
import Reporst from './vistas/Reporst';
import AgregarUsuario from './vistas/AgregarUsuario';
import AgregarHabitacion from './vistas/AgregarHabitacion';
import ListaHabitaciones from './vistas/ListaHabitaciones'
import AgregarVisitante from './vistas/AgregarVisitante';
import ModificarUsuario from './vistas/ModificarUsuario';
import ModificarHabitacion from './vistas/ModificarHabitacion';
import ModificarVisitante from './vistas/ModificarVisitante';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/ultimasNoticias" element={<News />} />
        <Route path="/eventos" element={<Events />} />
        <Route path="/informes" element={<Reporst />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/visitante" element={<ModuloVisitante />} />
        <Route path="/habitacion" element={<ModuloHabitacion />} />
        <Route path="/agregarvisitante" element={<AgregarVisitante />} />
        <Route path="/Admindash" element={<Admindash />} /> 
        <Route path="/lista" element={<ListaHabitaciones />} />
        <Route path="/Recepcionista" element={<RecepcionistaDashboard />} /> 
        <Route path="/Guarda" element={<GuardaDahboard />} />       
        <Route path="/login" element={<Login />} />
        <Route path="/agregar-usuario" element={<AgregarUsuario />} />
        <Route path="/agregarhabitacion" element={<AgregarHabitacion />} />
        <Route path="/modificar-usuario/:id" element={<ModificarUsuario />} /> 
        <Route path="/modificarvisitante/:id" element={<ModificarVisitante />} />
        <Route path="/modificarhabitacion/:id" element={<ModificarHabitacion />} />
         
      </Routes>
    </Router>
  );
}

export default App;
