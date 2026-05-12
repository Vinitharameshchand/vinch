import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Collection from './components/Collection';
import Lifestyle from './components/Lifestyle';
import ProductExperience from './components/ProductExperience';
import SocialProof from './components/SocialProof';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import QuickView from './components/QuickView';
import CartDrawer from './components/CartDrawer';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-vinch-cream min-h-screen selection:bg-vinch-gold selection:text-white overflow-x-hidden">
      <Navbar cartCount={cart.length} setIsCartOpen={setIsCartOpen} />
      <main>
        <Hero />
        <Philosophy />
        <Collection setActiveProduct={setActiveProduct} addToCart={addToCart} />
        <Lifestyle />
        <ProductExperience />
        <SocialProof />
        <Newsletter />
      </main>
      <Footer />

      <AnimatePresence>
        {activeProduct && (
          <QuickView 
            product={activeProduct} 
            onClose={() => setActiveProduct(null)} 
            addToCart={addToCart}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isCartOpen && (
          <CartDrawer 
            cart={cart} 
            onClose={() => setIsCartOpen(false)} 
            removeFromCart={removeFromCart}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
