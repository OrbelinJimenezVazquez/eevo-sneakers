import { useParams } from 'react-router-dom';
import products from '../data/products.json';
import { useCart } from '../context/CartContext';
import '/src/styles/ProductCard.css';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <h1>Producto no encontrado</h1>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ maxWidth: '300px' }} />
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
  );
}