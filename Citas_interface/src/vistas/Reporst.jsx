import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Reports.css';

const Reports = () => (
  <div className="reports-container">
    <h1>Informes</h1>
    <div className="report-card">
      <h2>Informe Anual 2023</h2>
      <p>Un resumen de las actividades y logros del año pasado.</p>
      <Link to="/reports/annual-2023" className="report-link">Ver informe</Link>
    </div>
    <div className="report-card">
      <h2>Estadísticas de Pacientes</h2>
      <p>Datos y análisis sobre el número de pacientes atendidos.</p>
      <Link to="/reports/patient-stats" className="report-link">Ver informe</Link>
    </div>
    <div className="report-card">
      <h2>Evaluación de Servicios</h2>
      <p>Opiniones y comentarios de nuestros pacientes sobre los servicios.</p>
      <Link to="/reports/service-evaluation" className="report-link">Ver informe</Link>
    </div>
    <div className="report-card">
      <h2>Reporte de Finanzas</h2>
      <p>Un análisis detallado de las finanzas del hospital.</p>
      <Link to="/reports/financial" className="report-link">Ver informe</Link>
    </div>
    <div className="report-card">
      <h2>Plan Estratégico 2024</h2>
      <p>Nuestros objetivos y estrategias para el próximo año.</p>
      <Link to="/reports/strategic-plan" className="report-link">Ver informe</Link>
    </div>
  </div>
);

export default Reports;
