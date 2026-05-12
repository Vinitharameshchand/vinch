import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Lifestyle = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 scale-125"
      >
        <img 
          src="/images/hero.png" 
          alt="Lifestyle Campaign" 
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-vinch-espresso/40 backdrop-blur-[2px]"></div>
      </motion.div>

      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-vinch-cream mb-8 leading-tight">
            More than a bag. <br />
            <span className="italic">A reflection.</span>
          </h2>
          <p className="text-lg md:text-xl text-vinch-cream/80 font-sans tracking-wide max-w-2xl mx-auto mb-12">
            A reflection of movement, ambition, and presence. Designed for the quiet moments and the loud achievements.
          </p>
          <button className="px-12 py-5 bg-vinch-cream text-vinch-espresso text-[11px] tracking-[0.3em] font-sans font-bold uppercase hover:bg-vinch-gold hover:text-white transition-all duration-500">
            Explore the Campaign
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Lifestyle;
