import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { content } from '../data/content';

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-32 px-6 md:px-12 bg-vinch-cream max-w-[1800px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side - Text */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-[11px] tracking-[0.4em] font-sans font-semibold text-vinch-gold uppercase mb-8">
              {content.philosophy.tagline}
            </p>
            <h2 className="text-5xl md:text-6xl font-serif text-vinch-espresso leading-tight mb-8">
              {content.philosophy.headline.split(' ').map((word, i) => (
                <React.Fragment key={i}>
                  {word === 'brand.' || word === 'being.' ? <span className="italic">{word} </span> : word + ' '}
                  {i === 3 && <br />}
                </React.Fragment>
              ))}
            </h2>
            <p className="text-lg text-vinch-espresso/70 font-sans leading-relaxed mb-10 max-w-md">
              {content.philosophy.subtext}
            </p>
            
            <a href="#" className="inline-flex items-center group space-x-4">
              <span className="text-[11px] tracking-[0.3em] font-sans font-bold text-vinch-espresso group-hover:text-vinch-gold transition-colors duration-300">
                {content.philosophy.linkText}
              </span>
              <div className="w-10 h-[1px] bg-vinch-espresso/30 group-hover:bg-vinch-gold group-hover:w-16 transition-all duration-500"></div>
              <ArrowRight size={16} className="text-vinch-espresso/50 group-hover:text-vinch-gold group-hover:translate-x-2 transition-all duration-500" />
            </a>
          </motion.div>
        </div>

        {/* Right Side - Asymmetrical Layout */}
        <div className="lg:col-span-7 order-1 lg:order-2 relative">
          <div className="grid grid-cols-12 gap-4 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-10 md:col-start-2 relative z-10"
            >
              <img 
                src={content.philosophy.image} 
                alt="Philosophy" 
                className="w-full h-auto object-cover shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 border-[1px] border-vinch-gold/20 translate-x-4 translate-y-4 -z-10"></div>
            </motion.div>

            {/* Floating Element */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              viewport={{ once: true }}
              className="hidden md:block absolute -left-12 bottom-12 z-20 bg-vinch-beige p-10 shadow-xl"
            >
              <div className="flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-serif text-vinch-espresso italic mb-2">V</span>
                <div className="w-8 h-[1px] bg-vinch-gold/50 mb-2"></div>
                <span className="text-[8px] tracking-[0.3em] uppercase text-vinch-espresso/60">Crafted with Intention</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
