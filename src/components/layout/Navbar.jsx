import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '/src/styles/components/layout/Nav-foot.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isHoveringNav, setIsHoveringNav] = useState(false);
  const megaMenuRef = useRef(null);
  const hoverTimer = useRef(null);
  
  // Obtener la ubicación actual
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // Efecto para el scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para obtener las clases del navbar
  const getNavbarClasses = () => {
    const classes = ['navbar'];
    if (isScrolled) classes.push('scrolled');
    if (!isHomePage) classes.push('solid');
    if (isHoveringNav) classes.push('hovered');
    return classes.join(' ');
  };

  // Handlers para hover
  const handleNavEnter = () => {
    setIsHoveringNav(true);
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
  };

  const handleNavLeave = () => {
    hoverTimer.current = setTimeout(() => {
      setIsHoveringNav(false);
    }, 200);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveMenu(null);
  };

const handleMenuEnter = (menu) => {
  // Cancelar cualquier timeout pendiente
  if (hoverTimer.current) {
    clearTimeout(hoverTimer.current);
    hoverTimer.current = null;
  }
  // Usar requestAnimationFrame para mejor rendimiento
  requestAnimationFrame(() => {
    setActiveMenu(menu);
  });
};

const handleMenuLeave = () => {
  // Configurar timeout con cancelación previa
  hoverTimer.current = setTimeout(() => {
    requestAnimationFrame(() => {
      setActiveMenu(null);
    });
  }, 150); // Tiempo reducido para mejor experiencia
};

  const handleMegaMenuEnter = () => {
    // Cancelar cualquier cierre pendiente cuando el mouse entra al mega menú
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
    }
  };

  const handleMegaMenuLeave = () => {
    // Cerrar el menú cuando el mouse sale completamente
    hoverTimer.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setActiveMenu(null);
  };
  
  // Menús y su contenido
const menus = {
  new: {
    title: "Lo Nuevo",
    columns: [
      {
        title: "Descubre",
        links: [
          { text: "Destacados", to: "/new/highlights" },
          { text: "Novedades para Hombre", to: "/new/men" },
          { text: "Novedades para Mujer", to: "/new/women" },
          { text: "Novedades para Niños", to: "/new/kids" }
        ]
      }
    ]
  },
  men: {
    title: "Hombre",
    columns: [
      {
        title: "Destacados",
        links: [
          { text: "Comprar todo Hombre", to: "/men/all" },
          { text: "Lo Nuevo", to: "/men/new" },
          { text: "Los más vendidos", to: "/men/top" },
          { text: "Ofertas para Hombre", to: "/men/offers" }
        ]
      },
      {
        title: "Calzado",
        links: [
          { text: "Todo el calzado", to: "/men/shoes" },
          { text: "Casual", to: "/men/casual" },
          { text: "Jordan", to: "/men/jordan" },
          { text: "Air Force 1", to: "/men/airforce" },
          { text: "Air Max", to: "/men/airmax" },
          { text: "Dunks & Blazers", to: "/men/dunks" },
          { text: "Tacos de fútbol", to: "/men/soccer" },
          { text: "Correr", to: "/men/run" },
          { text: "Básquetbol", to: "/men/basket" },
          { text: "Gym y Entrenamiento", to: "/men/gym" },
          { text: "Sandalias y chanclas", to: "/men/sandals" },
          { text: "Nike SB", to: "/men/sb" }
        ]
      }
    ]
  },
  women: {
    title: "Mujer",
    columns: [
      {
        title: "Destacados",
        links: [
          { text: "Comprar todo Mujer", to: "/women/all" },
          { text: "Lo Nuevo", to: "/women/new" },
          { text: "Los más vendidos", to: "/women/top" },
          { text: "Ofertas para Mujer", to: "/women/offers" }
        ]
      },
      {
        title: "Calzado",
        links: [
          { text: "Todo el calzado", to: "/women/shoes" },
          { text: "Casual", to: "/women/casual" },
          { text: "Jordan", to: "/women/jordan" },
          { text: "Gym y Entrenamiento", to: "/women/gym" },
          { text: "Air Max", to: "/women/airmax" },
          { text: "Correr", to: "/women/run" },
          { text: "Tenis", to: "/women/tennis" },
          { text: "Sandalias y chanclas", to: "/women/sandals" },
          { text: "Unisex", to: "/women/unisex" }
        ]
      }
    ]
  },
  kids: {
    title: "Niños/as",
    columns: [
      {
        title: "Destacados",
        links: [
          { text: "Comprar todo Niños", to: "/kids/all" },
          { text: "Lo Nuevo", to: "/kids/new" },
          { text: "Los más vendidos", to: "/kids/top" },
          { text: "Ofertas para Niños", to: "/kids/offers" }
        ]
      },
      {
        title: "Calzado",
        links: [
          { text: "Todo el calzado", to: "/kids/shoes" },
          { text: "Casual", to: "/kids/casual" },
          { text: "Jordan", to: "/kids/jordan" },
          { text: "Gym y Entrenamiento", to: "/kids/gym" },
          { text: "Air Max", to: "/kids/airmax" },
          { text: "Correr", to: "/kids/run" },
          { text: "Tenis", to: "/kids/tennis" },
          { text: "Sandalias y chanclas", to: "/kids/sandals" },
          { text: "Unisex", to: "/kids/unisex" }
        ]
      }
    ]
  },
  offers: {
    title: "Ofertas",
    columns: [
      {
        title: "Destacados",
        links: [
          { text: "Todas las ofertas", to: "/offers/all" },
          { text: "Nuevos descuentos", to: "/offers/new" },
          { text: "Los más vendidos", to: "/offers/top" },
          { text: "Ofertas especiales", to: "/offers/special" }
        ]
      },
      {
        title: "Por categoría",
        links: [
          { text: "Calzado en oferta", to: "/offers/shoes" },
          { text: "Ropa en oferta", to: "/offers/clothing" },
          { text: "Accesorios en oferta", to: "/offers/accessories" },
          { text: "Últimas unidades", to: "/offers/last-chance" }
        ]
      }
    ]
  }
};

  return (
    <>
      {/* Barra superior */}
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
      {/* Barra de navegación principal */}
      <nav 
        className={getNavbarClasses()}
        onMouseEnter={handleNavEnter}
        onMouseLeave={handleNavLeave}
      >
        <div className="logo">
          <Link to="/" onClick={closeAllMenus}>
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
          {Object.entries(menus).map(([key, menu]) => (
            <li 
              key={key}
              className="dropdown"
              onMouseEnter={() => handleMenuEnter(key)}
              onMouseLeave={handleMenuLeave}
            >
              <span className="dropdown-title">{menu.title}</span>
              
              {/* Mega Menú */}
              <div 
                ref={megaMenuRef}
                className={`mega-menu ${activeMenu === key ? 'active' : ''}`}
                onMouseEnter={handleMegaMenuEnter}
                onMouseLeave={handleMegaMenuLeave}
              >
                <div className="mega-menu-content">
                  {menu.columns.map((column, colIndex) => (
                    <div key={colIndex} className="menu-column">
                      <h4>{column.title}</h4>
                      <ul>
                        {column.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <Link to={link.to} onClick={closeAllMenus}>{link.text}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          ))}

          <li className="cart-icon">
            <Link to="/cart" onClick={closeAllMenus}>
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