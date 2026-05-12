import React from 'react';
import { motion } from 'framer-motion';

const socialImages = [
  { id: 1, url: '/images/hero.png', style: 'col-span-2 row-span-2' },
  { id: 2, url: '/images/bag-sculpt.png', style: 'col-span-1 row-span-1' },
  { id: 3, url: '/images/philosophy.png', style: 'col-span-1 row-span-1' },
  { id: 4, url: '/images/bag-mini.png', style: 'col-span-1 row-span-2' },
  { id: 5, url: '/images/bag-crossbody.png', style: 'col-span-1 row-span-1' },
  { id: 6, url: '/images/hero.png', style: 'col-span-1 row-span-1' },
];

const SocialProof = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="text-[11px] tracking-[0.4em] font-sans font-semibold text-vinch-espresso/40 uppercase mb-4">
              Carried Differently
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-vinch-espresso">
              A community that inspires.
            </h2>
          </div>
          <button className="hidden md:block text-[11px] tracking-[0.3em] font-sans font-bold text-vinch-gold uppercase border-b border-vinch-gold pb-1">
            View More
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 h-[800px] md:h-[600px]">
           {/* Custom Bento Grid for Social Proof */}
           <div className="col-span-2 row-span-2 relative overflow-hidden group">
              <img src="/images/hero.png" alt="Social 1" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-700 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white text-[10px] tracking-[0.3em] uppercase">Shop the Look</span>
              </div>
           </div>
           <div className="col-span-1 row-span-1 relative overflow-hidden group">
              <img src="/images/bag-sculpt.png" alt="Social 2" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
           </div>
           <div className="col-span-1 row-span-2 relative overflow-hidden group">
              <img src="/images/philosophy.png" alt="Social 3" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
           </div>
           <div className="col-span-1 row-span-1 relative overflow-hidden group">
              <img src="/images/bag-mini.png" alt="Social 4" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
           </div>
           <div className="col-span-1 row-span-1 relative overflow-hidden group">
              <img src="/images/bag-crossbody.png" alt="Social 5" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
           </div>
           <div className="col-span-1 row-span-1 relative overflow-hidden group hidden lg:block">
              <img src="/images/hero.png" alt="Social 6" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
           </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
