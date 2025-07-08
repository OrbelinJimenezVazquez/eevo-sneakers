// Componente InstagramFeed.jsx
import React from 'react';
import '/src/styles/sections/InstagramFeed.css';

const InstagramFeed = () => {
  return (
    <section className="instagram-section">
      <h2 className="section-title">Síguenos en Instagram</h2>
      <p className="instagram-subtitle">@eevosneakers</p>
      <div className="instagram-feed">
        {/* Esto sería reemplazado por el embed real de Instagram */}
        <div className="instagram-placeholder">
          <p>Mira nuestro último contenido en Instagram</p>
          <a 
            href="https://instagram.com/eevosneakers" 
            target="_blank" 
            rel="noopener noreferrer"
            className="instagram-button"
          >
            Ver Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;