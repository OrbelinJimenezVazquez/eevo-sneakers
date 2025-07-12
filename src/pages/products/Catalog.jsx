import products from 'data/products/products.json';
import ProductCard from '../components/products/ProductCard';

export default function Catalog() {
  return (
    <div>
      <h1>Catálogo</h1>
      {products.map(prod => (
        <ProductCard key={prod.id} {...prod} />
      ))}
    </div>
  );
}