import { Link } from 'react-router-dom';
import '/src/pages/Main.css';

export default function ProductCard({ id, name, price, image }) {
  return (
    <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>${price}</p>
      </div>
    </Link>
  );
}