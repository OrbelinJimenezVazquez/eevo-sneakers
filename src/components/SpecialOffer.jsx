// Componente SpecialOffer.jsx
import React from 'react';
import '/src/styles/SpecialOffer.css';

const SpecialOffer = () => {
  return (
    <section className="special-offer">
      <div className="offer-content">
        <h2>OFERTA EXCLUSIVA</h2>
        <p>20% DE DESCUENTO EN TU PRIMERA COMPRA</p>
        <span className="offer-code">CÓDIGO: EEVO20</span>
        <a href="/tienda" className="offer-button">Aprovechar Oferta</a>
      </div>
    </section>
  );
};

export default SpecialOffer;