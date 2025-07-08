// Componente Newsletter.jsx
import React, { useState } from 'react';
import '/src/styles/sections/Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el email
    console.log('Email submitted:', email);
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <h2>Únete a nuestra comunidad</h2>
        <p>Recibe las últimas noticias, ofertas exclusivas y lanzamientos antes que nadie</p>
        
        {subscribed ? (
          <div className="success-message">
            ¡Gracias por suscribirte! Revisa tu email para confirmar.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu dirección de email"
              required
            />
            <button type="submit">Suscribirse</button>
          </form>
        )}
        
        <p className="privacy-text">
          Respetamos tu privacidad. Nunca compartiremos tu información.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;