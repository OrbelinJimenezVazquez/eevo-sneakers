import React from 'react';
import { Link } from 'react-router-dom';
import '/src/styles/pages/Home.css'; // Asegúrate de tener los estilos

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>EEVO SNEAKERS</h1>
        <p className="hero-subtitle">"Camina con estilo: Deja tu huella en cada paso"</p>
        <Link to="/catalog" className="hero-cta">
          Descubre la Colección
        </Link>
      </div>
      
      {/* Video de fondo - Asegúrate de tener el archivo en tu carpeta videos */}
      <video autoPlay muted loop className="hero-video">
        <source src="/src/assets/videos/ggg.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>
    </section>
    
  );
};

export default HeroSection;