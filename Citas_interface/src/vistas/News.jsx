import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/News.css';

const News = () => (
  <div className="news-container">
    <h1>Últimas Noticias</h1>
    <div className="news-card">
      <h2>Actualización COVID-19</h2>
      <p>Nuevas medidas de seguridad implementadas en el hospital.</p>
      <Link to="/news/covid-19" className="news-link">Leer más</Link>
    </div>
    <div className="news-card">
      <h2>Inauguración de la nueva ala pediátrica</h2>
      <p>El hospital ha inaugurado una nueva ala para pacientes pediátricos.</p>
      <Link to="/news/pediatrics" className="news-link">Leer más</Link>
    </div>
    <div className="news-card">
      <h2>Campaña de donación de sangre</h2>
      <p>Únete a nuestra campaña de donación de sangre este mes.</p>
      <Link to="/news/blood-donation" className="news-link">Leer más</Link>
    </div>
    <div className="news-card">
      <h2>Nuevos equipos de resonancia magnética</h2>
      <p>El hospital ha adquirido nuevos equipos de última generación.</p>
      <Link to="/news/mri-equipment" className="news-link">Leer más</Link>
    </div>
    <div className="news-card">
      <h2>Reconocimiento a nuestro personal</h2>
      <p>Celebramos el trabajo y dedicación de nuestro equipo médico.</p>
      <Link to="/news/staff-recognition" className="news-link">Leer más</Link>
    </div>
  </div>
);

export default News;
