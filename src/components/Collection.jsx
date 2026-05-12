import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'SCULPT TOTE',
    price: '$1,200',
    image: '/images/bag-sculpt.png',
  },
  {
    id: 2,
    name: 'MINI SHOULDER BAG',
    price: '$2,400',
    image: '/images/bag-mini.png',
  },
  {
    id: 3,
    name: 'CONVERTIBLE CROSSBODY',
    price: '$1,700',
    image: '/images/bag-crossbody.png',
  },
];

const Collection = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-[1800px] mx-auto text-center mb-24">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] tracking-[0.4em] font-sans font-semibold text-vinch-espresso/40 uppercase mb-4"
        >
          Our Signature Collection
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-serif text-vinch-espresso"
        >
          Crafted to carry your presence.
        </motion.h2>
      </div>

      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden mb-8 aspect-[4/5] bg-vinch-cream">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.2, ease: "circOut" }}
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Quick View Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">
                <button className="w-full py-4 bg-vinch-espresso text-white text-[10px] tracking-[0.3em] uppercase font-sans font-medium hover:bg-vinch-gold transition-colors duration-300">
                  Shop Now
                </button>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <h3 className="text-[12px] tracking-[0.3em] font-sans font-bold text-vinch-espresso mb-2 uppercase">
                {product.name}
              </h3>
              <p className="text-[11px] tracking-[0.2em] font-sans text-vinch-espresso/50">
                {product.price}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <motion.button 
          whileHover={{ x: 10 }}
          className="inline-flex items-center space-x-6 text-[11px] tracking-[0.4em] font-sans font-bold text-vinch-espresso uppercase border-b border-vinch-espresso/20 pb-2"
        >
          <span>View All Pieces</span>
          <div className="w-8 h-[1px] bg-vinch-espresso"></div>
        </motion.button>
      </div>
    </section>
  );
};

export default Collection;
