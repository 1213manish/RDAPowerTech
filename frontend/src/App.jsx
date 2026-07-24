import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Quotation from './pages/Quotation';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [cart, setCart] = useState([]);

  // Load saved cart from localStorage if available
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('rda_quotation_cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (e) {
      console.error('Failed to parse cart from localStorage:', e);
    }
  }, []);

  // Sync cart state with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('rda_quotation_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage:', e);
    }
  }, [cart]);

  // Add item to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex((item) => item.id === product.id);
      if (existingIdx > -1) {
        const updated = [...prevCart];
        updated[existingIdx].quantity += 1;
        return updated;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Update item quantity in cart
  const updateCartQty = (product, newQty) => {
    if (newQty <= 0) {
      removeFromCart(product.id);
      return;
    }

    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex((item) => item.id === product.id);
      if (existingIdx > -1) {
        const updated = [...prevCart];
        updated[existingIdx].quantity = newQty;
        return updated;
      } else {
        return [...prevCart, { ...product, quantity: newQty }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate total item count for header badge
  const quotationCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app-root">
      <Header 
        activePage={activePage} 
        setActivePage={setActivePage} 
        quotationCartCount={quotationCartCount} 
      />

      <main className="main-content">
        {activePage === 'home' && <Home setActivePage={setActivePage} />}
        {activePage === 'products' && (
          <Products 
            cart={cart} 
            addToCart={addToCart} 
            updateCartQty={updateCartQty} 
            removeFromCart={removeFromCart} 
          />
        )}
        {activePage === 'quotation' && (
          <Quotation 
            cart={cart} 
            updateCartQty={updateCartQty} 
            removeFromCart={removeFromCart} 
            clearCart={clearCart} 
            setActivePage={setActivePage}
          />
        )}
        {activePage === 'about' && <About setActivePage={setActivePage} />}
        {activePage === 'contact' && <Contact />}
      </main>

      <Footer setActivePage={setActivePage} />

      <style>{`
        .app-root {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .main-content {
          flex: 1;
        }
      `}</style>
    </div>
  );
}
