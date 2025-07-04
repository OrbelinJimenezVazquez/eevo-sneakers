import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '/src/styles/Nav-foot.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      setIsScrolled(show);
    };

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Cerrar menú al hacer clic en un enlace
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Barra superior (no fija) */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="auth-links">
            <Link to="/help" className="help-link">Ayuda</Link>
            <span className="divider">|</span>
            <Link to="/register" className="join-link">Únete a nosotros</Link>
            <span className="divider">|</span>
            <Link to="/login" className="login-link">Iniciar sesión</Link>
          </div>
        </div>
      </div>

      {/* Barra de navegación principal (fija) */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <Link to="/">
            <h1>Eevo Sneakers</h1>
          </Link>
        </div>
        
        {/* Menú Hamburguesa */}
        <div 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Menú de navegación"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/men" onClick={closeMenu}>Caballero</Link></li>
          <li><Link to="/women" onClick={closeMenu}>Dama</Link></li>
          <li><Link to="/offers" onClick={closeMenu}>Ofertas</Link></li>
          
          <li className="cart-icon">
            <Link to="/cart" onClick={closeMenu}>
              <i className="fas fa-shopping-cart"></i>
              <span className="cart-count">0</span>
            </Link>
          </li>
          
          <li className="search-container">
            <input 
              type="text" 
              placeholder="Buscar sneakers..." 
              aria-label="Buscar productos"
            />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}