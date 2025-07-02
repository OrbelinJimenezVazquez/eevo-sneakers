import products from '../data/products.json';
import ProductCard from '../components/ProductCard';

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