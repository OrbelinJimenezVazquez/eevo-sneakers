import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '/src/styles/Nav-foot.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50; // Cambia a opaco después de 50px de scroll
      setIsScrolled(show);
    };

    // Agrega el listener al montar el componente
    document.addEventListener('scroll', handleScroll);
    
    // Limpia el listener al desmontar
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <Link to="/">
          <h1>Eevo Sneakers</h1>
        </Link>
      </div>
      
      <ul className='nav-links'>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/catalog">Catálogo</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
        
        <li className="user-menu">
          <span className="user-dropdown-trigger">Usuario <i className="fas fa-chevron-down"></i></span>
          <ul className="dropdown-menu">
            <li><Link to="/login">Iniciar Sesión</Link></li>
            <li><Link to="/register">Registrarse</Link></li>
          </ul>
        </li>
        
        <li className="cart-icon">
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">0</span>
          </Link>
        </li>
        
        <li className="search-container">
          <input type="text" placeholder="Buscar sneakers..." />
          <button type="submit"><i className="fas fa-search"></i></button>
        </li>
      </ul>
    </nav>
  );
}