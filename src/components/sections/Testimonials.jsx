import React from 'react';
import '/src/styles/sections/Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Carlos M.',
    role: 'Coleccionista',
    text: 'La mejor selección de sneakers que he encontrado. Envío rápido y autenticidad garantizada.',
    rating: 5,
    avatar: 'src/assets/images/carlos.jpeg'
  },
  {
    id:2,
    name: 'Juan C. Lopez',
    role: 'Atleta',
    text:'Hay una excelente variedad de opciones a escojer',
    rating: 4,
    avatar: "src/assets/images/juan.webp"
  },
  {
    id:3,
    name:'Liliana M. Rodriguez',
    role:'Madre',
    text:'Satisfecha con la compra, envio rapido y seguro',
    rating:5,
    avatar:'src/assets/images/lili.jpeg'
  },
  // Agrega más testimonios...
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">Lo que dicen nuestros clientes</h2>
      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-header">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                className="testimonial-avatar"
              />
              <div>
                <h3>{testimonial.name}</h3>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </div>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <div className="testimonial-rating">
              {[...Array(5)].map((_, i) => (
                <span 
                  key={i} 
                  className={`star ${i < testimonial.rating ? 'filled' : ''}`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;