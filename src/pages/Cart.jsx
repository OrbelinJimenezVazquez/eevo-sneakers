import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '/src/styles/pages/Cart.css';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  const shippingCost = 0; // Envío gratis
  const finalTotal = totalPrice + shippingCost;

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h1>Carrito de compras</h1>
        
        <div className="membership-banner">
          <h3>Envío gratuito para miembros.</h3>
          <p>
            Hazte miembro de nuestra tienda para disfrutar de envíos rápidos y gratuitos.{' '}
            <a href="#join">Únete</a> o <a href="#login">Iniciar sesión</a>
          </p>
        </div>

        <div className="empty-cart">
          <h2>Bolsa de compra</h2>
          <p>No hay productos en tu bolsa de compra.</p>
          <Link to="/catalog" className="btn btn-primary">
            Continuar comprando
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Bolsa de compra</h1>
      
      <div className="membership-banner">
        <h3>Envío gratuito para miembros.</h3>
        <p>
          Hazte miembro de nuestra tienda para disfrutar de envíos rápidos y gratuitos.{' '}
          <a href="#join">Únete</a> o <a href="#login">Iniciar sesión</a>
        </p>
      </div>

      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-image">
              {item.image ? (
                <img src={item.image} alt={item.name} />
              ) : (
                'Imagen del producto'
              )}
            </div>
            
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <div className="product-details">
                {item.category && <span>{item.category}</span>}
                {item.size && <span> • Talla: {item.size}</span>}
                {item.color && <span> • Color: {item.color}</span>}
              </div>
              <p className="price">${item.price}</p>
              
              <div className="quantity-controls">
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                  +
                </button>
              </div>
            </div>
            
            <div className="cart-item-actions">
              <button 
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Resumen</h2>
        
        <div className="summary-line">
          <span>Subtotal</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        
        <div className="summary-line">
          <span>Gastos de envío y gestión estimados</span>
          <span className="free-shipping">Gratis</span>
        </div>
        
        <div className="summary-line">
          <span>Total</span>
          <span className="total-amount">${finalTotal.toFixed(2)}</span>
        </div>

        <div className="checkout-buttons">
          <button className="btn btn-secondary" disabled>
            Compra como invitado
          </button>
          <button className="btn btn-secondary" disabled>
            Compra como miembro
          </button>
          <button className="btn btn-primary">
            Proceder al pago
          </button>
        </div>

        <div className="paypal-section">
          PayPal
        </div>

        <button className="clear-cart-btn" onClick={clearCart}>
          Vaciar carrito
        </button>
      </div>
    </div>
  );
}