import products from '../data/products.json';
import ProductCard from '../components/ProductCard';

export default function Home() {
  return (
    <div>
      <h1>Bienvenido a Eevo Sneakers</h1>
      {products.slice(0, 2).map(prod => (
        <ProductCard key={prod.id} {...prod} />
      ))}
    </div>
  );
}