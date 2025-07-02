import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h1>Carrito</h1>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="card">
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Quitar</button>
          </div>
        ))
      )}
    </div>
  );
}