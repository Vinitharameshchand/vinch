import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          src={content.hero.image} 
          alt="Luxury Campaign" 
          className="w-full h-full object-cover object-center"
        />
        {/* Scrim for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-vinch-cream/80 via-vinch-cream/40 to-transparent"></div>
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      {/* Grain Texture */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

      {/* Content */}
      <div className="relative z-20 max-w-[1800px] mx-auto px-6 md:px-12 w-full pt-20">
        <div className="max-w-3xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[11px] tracking-[0.4em] font-sans font-semibold text-vinch-espresso/80 uppercase mb-4"
          >
            {content.hero.tagline}
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-vinch-espresso font-medium leading-[1.1] mb-8"
          >
            {content.hero.headline.split(' ').map((word, i) => (
              <React.Fragment key={i}>
                {word === 'woman' ? <span className="italic">{word} </span> : word + ' '}
                {i === 2 && <br />}
                {i === 5 && <br />}
              </React.Fragment>
            ))}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-vinch-espresso font-sans max-w-md mb-10 leading-relaxed drop-shadow-sm"
          >
            {content.hero.subtext}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            {content.hero.cta.map((cta, i) => (
              <a 
                key={i}
                href={cta.link}
                className={`px-10 py-4 text-[11px] tracking-[0.2em] font-sans font-medium uppercase transition-all duration-500 ${
                  i === 0 
                    ? "bg-vinch-espresso text-vinch-cream hover:bg-vinch-gold" 
                    : "border border-vinch-espresso/20 text-vinch-espresso hover:bg-vinch-espresso hover:text-vinch-cream backdrop-blur-sm"
                }`}
              >
                {cta.text}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="w-[1px] h-12 bg-vinch-espresso/30 relative">
          <div className="absolute top-0 left-0 w-full bg-vinch-espresso h-1/2"></div>
        </div>
      </motion.div>

      {/* Circular Badge */}
      <motion.div 
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-12 right-12 z-20 hidden lg:block"
      >
        <div className="relative w-32 h-32 border border-vinch-espresso/10 rounded-full flex items-center justify-center">
          <svg className="absolute w-full h-full p-2" viewBox="0 0 100 100">
            <path
              id="circlePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text className="text-[8px] uppercase tracking-[0.2em] fill-vinch-espresso/40 font-sans">
              <textPath xlinkHref="#circlePath">
                Est. 2024 • Timeless Design • Modern Luxury •
              </textPath>
            </text>
          </svg>
          <div className="w-1 h-1 bg-vinch-gold rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
