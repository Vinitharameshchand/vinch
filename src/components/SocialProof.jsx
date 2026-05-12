import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';

const SocialProof = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="text-[11px] tracking-[0.4em] font-sans font-semibold text-vinch-espresso/40 uppercase mb-4">
              {content.social.tagline}
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-vinch-espresso">
              {content.social.headline}
            </h2>
          </div>
          <button className="hidden md:block text-[11px] tracking-[0.3em] font-sans font-bold text-vinch-gold uppercase border-b border-vinch-gold pb-1">
            View More
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 h-[800px] md:h-[600px]">
           {/* Custom Bento Grid for Social Proof using Dynamic Data */}
           <div className="col-span-2 row-span-2 relative overflow-hidden group">
              <img src={content.social.images[0].url} alt="Social 1" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-700 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white text-[10px] tracking-[0.3em] uppercase">Shop the Look</span>
              </div>
           </div>
           <div className="col-span-1 row-span-1 relative overflow-hidden group">
              <img src={content.social.images[1].url} alt="Social 2" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
           </div>
           <div className="col-span-1 row-span-2 relative overflow-hidden group">
              <img src={content.social.images[2].url} alt="Social 3" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
           </div>
           <div className="col-span-1 row-span-1 relative overflow-hidden group">
              <img src={content.social.images[3].url} alt="Social 4" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
           </div>
           <div className="col-span-1 row-span-1 relative overflow-hidden group">
              <img src={content.social.images[4].url} alt="Social 5" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
           </div>
           <div className="col-span-1 row-span-1 relative overflow-hidden group hidden lg:block">
              <img src={content.social.images[5].url} alt="Social 6" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
           </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
