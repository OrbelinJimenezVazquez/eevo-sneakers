import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ScrollToTop from './components/ui/ScrollToTop';
import { CartProvider } from './context/CartContext';
import './App.css';

// Lazy loading para páginas (mejora performance)
const Home = lazy(() => import('./pages/Home'));
const Catalog = lazy(() => import('./pages/products/Catalog'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Cart = lazy(() => import('./pages/Cart'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}