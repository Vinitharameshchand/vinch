import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../data/content';

const Navbar = ({ cartCount, setIsCartOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'SHOP', href: '#' },
    { name: 'COLLECTIONS', href: '#' },
    { name: 'ABOUT', href: '#' },
  ];

  const rightLinks = [
    { name: 'LOOKBOOK', href: '#' },
    { name: 'JOURNAL', href: '#' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-vinch-cream/80 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Left Links - Desktop */}
        <div className="hidden lg:flex space-x-10 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[11px] tracking-[0.3em] font-sans font-medium text-vinch-espresso hover:text-vinch-gold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Logo */}
        <div className="flex-1 lg:flex-none text-center">
          <a href="/" className="text-2xl md:text-3xl tracking-[0.4em] font-serif font-light text-vinch-espresso">
            {content.brand.name}
          </a>
        </div>

        {/* Right Links - Desktop */}
        <div className="hidden lg:flex space-x-10 items-center">
          {rightLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[11px] tracking-[0.3em] font-sans font-medium text-vinch-espresso hover:text-vinch-gold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-6 ml-4">
            <Search size={18} className="text-vinch-espresso cursor-pointer hover:text-vinch-gold transition-colors" />
            <User size={18} className="text-vinch-espresso cursor-pointer hover:text-vinch-gold transition-colors" />
            <div className="relative cursor-pointer group" onClick={() => setIsCartOpen(true)}>
              <ShoppingBag size={18} className="text-vinch-espresso group-hover:text-vinch-gold transition-colors" />
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-vinch-gold text-[8px] text-white w-4 h-4 rounded-full flex items-center justify-center font-sans font-bold shadow-sm"
                >
                  {cartCount}
                </motion.span>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-6">
           <ShoppingBag size={20} className="text-vinch-espresso" />
           <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
             {isMobileMenuOpen ? <X size={24} className="text-vinch-espresso" /> : <Menu size={24} className="text-vinch-espresso" />}
           </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-vinch-cream border-t border-vinch-taupe/20 p-10 lg:hidden"
          >
            <div className="flex flex-col space-y-8 items-center">
              {[...navLinks, ...rightLinks].map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm tracking-[0.3em] font-sans font-medium text-vinch-espresso"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex space-x-10 pt-4">
                <Search size={22} className="text-vinch-espresso" />
                <User size={22} className="text-vinch-espresso" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
