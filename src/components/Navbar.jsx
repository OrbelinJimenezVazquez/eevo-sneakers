import { Link } from 'react-router-dom';
import '/src/pages/Nav-foot.css'; 

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Eevo Sneakers</h1>
      </div>
      <ul className='nav-links'>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/catalog">Catálogo</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
        <li className="user-menu">
          <span>Usuario</span>
          <ul className="dropdown">
            <li><Link to="/Login">Iniciar Sesión</Link></li>
            <li><Link to="/Register">Registrarse</Link></li>
          </ul>
        </li>
        <li>
          <Link to="/cart" className="nav-link">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">0</span>
          </Link>
        </li>
        <li class="search-container">
            <input type="text" placeholder="Buscar sneakers..."></input>
          <button type="submit"><i class="fas fa-search"></i></button>
        </li>
      </ul>

    </nav>
  );
}