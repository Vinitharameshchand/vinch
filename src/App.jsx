import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Collection from './components/Collection';
import Lifestyle from './components/Lifestyle';
import ProductExperience from './components/ProductExperience';
import SocialProof from './components/SocialProof';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
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
    <div className="bg-vinch-cream min-h-screen selection:bg-vinch-gold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Collection />
        <Lifestyle />
        <ProductExperience />
        <SocialProof />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
