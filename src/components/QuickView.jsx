import React from 'react';
import { motion } from 'framer-motion';
import { X, ShoppingBag, ArrowRight } from 'lucide-react';

const QuickView = ({ product, onClose, addToCart }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 md:px-0"
    >
      <div className="absolute inset-0 bg-vinch-espresso/40 backdrop-blur-md" onClick={onClose}></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative bg-vinch-cream w-full max-w-5xl h-[90vh] md:h-[70vh] overflow-hidden grid grid-cols-1 md:grid-cols-2"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 text-vinch-espresso hover:text-vinch-gold transition-colors"
        >
          <X size={24} />
        </button>

        {/* Product Image */}
        <div className="relative h-full overflow-hidden bg-vinch-beige/20">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="p-8 md:p-16 flex flex-col justify-center overflow-y-auto">
          <p className="text-[10px] tracking-[0.4em] font-sans font-semibold text-vinch-gold uppercase mb-4">
            Signature Piece
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-vinch-espresso mb-4">
            {product.name}
          </h2>
          <p className="text-xl font-sans text-vinch-espresso/70 mb-8">
            ${product.price.toLocaleString()}
          </p>
          
          <div className="w-12 h-[1px] bg-vinch-gold/30 mb-8"></div>
          
          <p className="text-[15px] leading-relaxed text-vinch-espresso/60 font-sans mb-10">
            {product.description}
          </p>

          <div className="space-y-4 mb-12">
            {product.features.map((feature, i) => (
              <div key={i} className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-vinch-gold/50"></div>
                <span className="text-[12px] tracking-wide text-vinch-espresso/80 font-sans">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <button 
              onClick={() => {
                addToCart(product);
                onClose();
              }}
              className="flex-1 px-8 py-5 bg-vinch-espresso text-vinch-cream text-[11px] tracking-[0.3em] font-sans font-bold uppercase hover:bg-vinch-gold transition-all duration-500 flex items-center justify-center space-x-4"
            >
              <ShoppingBag size={16} />
              <span>Add to Cart</span>
            </button>
            <button className="flex-1 px-8 py-5 border border-vinch-espresso/20 text-vinch-espresso text-[11px] tracking-[0.3em] font-sans font-bold uppercase hover:bg-vinch-espresso hover:text-vinch-cream transition-all duration-500 flex items-center justify-center space-x-4">
              <span>View Details</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default QuickView;
