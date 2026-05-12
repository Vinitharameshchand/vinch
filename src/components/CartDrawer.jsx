import React from 'react';
import { motion } from 'framer-motion';
import { X, Trash2, ArrowRight } from 'lucide-react';

const CartDrawer = ({ cart, onClose, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[110] flex justify-end"
    >
      <div className="absolute inset-0 bg-vinch-espresso/20 backdrop-blur-sm" onClick={onClose}></div>
      
      <motion.div 
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
        className="relative bg-vinch-cream w-full max-w-md h-full shadow-2xl flex flex-col"
      >
        <div className="p-8 border-b border-vinch-taupe/20 flex justify-between items-center">
          <h2 className="text-[14px] tracking-[0.4em] font-sans font-bold uppercase text-vinch-espresso">
            Shopping Bag ({cart.length})
          </h2>
          <button onClick={onClose} className="text-vinch-espresso hover:text-vinch-gold transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-vinch-beige/30 flex items-center justify-center">
                <X size={24} className="text-vinch-espresso/20" />
              </div>
              <p className="text-sm font-sans text-vinch-espresso/40 tracking-wider uppercase">Your bag is empty</p>
              <button 
                onClick={onClose}
                className="text-[11px] tracking-[0.3em] font-sans font-bold text-vinch-gold uppercase border-b border-vinch-gold pb-1"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item, index) => (
              <motion.div 
                key={`${item.id}-${index}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex space-x-6"
              >
                <div className="w-24 h-32 bg-vinch-beige/10 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <h3 className="text-[12px] tracking-[0.2em] font-sans font-bold uppercase text-vinch-espresso mb-1">
                      {item.name}
                    </h3>
                    <p className="text-[11px] font-sans text-vinch-espresso/50">
                      ${item.price.toLocaleString()}
                    </p>
                  </div>
                  <button 
                    onClick={() => removeFromCart(index)}
                    className="flex items-center space-x-2 text-[10px] text-red-400 hover:text-red-600 transition-colors uppercase tracking-widest"
                  >
                    <Trash2 size={12} />
                    <span>Remove</span>
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-8 border-t border-vinch-taupe/20 bg-vinch-beige/5">
            <div className="flex justify-between items-center mb-8">
              <span className="text-[11px] tracking-[0.3em] font-sans font-bold uppercase text-vinch-espresso/40">Subtotal</span>
              <span className="text-xl font-sans text-vinch-espresso">${total.toLocaleString()}</span>
            </div>
            <button className="w-full py-5 bg-vinch-espresso text-vinch-cream text-[11px] tracking-[0.3em] font-sans font-bold uppercase hover:bg-vinch-gold transition-all duration-500 flex items-center justify-center space-x-4 group">
              <span>Checkout</span>
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            <p className="text-[10px] text-center text-vinch-espresso/30 mt-6 tracking-wide">
              Shipping and taxes calculated at checkout.
            </p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CartDrawer;
