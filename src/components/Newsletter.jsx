import React from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-vinch-cream border-t border-vinch-taupe/20">
      <div className="max-w-[1800px] mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="text-[11px] tracking-[0.4em] font-sans font-semibold text-vinch-gold uppercase mb-6">
            Enter the world of VINCH
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-vinch-espresso mb-8">
            Be the first to know.
          </h2>
          <p className="text-lg text-vinch-espresso/60 font-sans mb-12">
            Early access to drops, campaigns, and limited collections. Plus, our monthly journal on modern living and quiet luxury.
          </p>

          <form className="w-full max-w-lg flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS" 
              className="flex-1 bg-transparent border-b border-vinch-espresso/20 py-4 text-[11px] tracking-[0.2em] font-sans text-vinch-espresso placeholder:text-vinch-espresso/30 focus:outline-none focus:border-vinch-espresso transition-all duration-300"
            />
            <button className="px-10 py-4 bg-vinch-espresso text-vinch-cream text-[11px] tracking-[0.2em] font-sans font-bold uppercase hover:bg-vinch-gold transition-all duration-500 whitespace-nowrap">
              Join the Club
            </button>
          </form>
          
          <p className="mt-8 text-[10px] text-vinch-espresso/40 tracking-wider font-sans">
            By signing up, you agree to our <a href="#" className="underline">Terms & Conditions</a> and <a href="#" className="underline">Privacy Policy</a>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
