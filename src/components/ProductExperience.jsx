import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Feather, Clock } from 'lucide-react';
import { content } from '../data/content';

const iconMap = {
  "Premium Vegan Leather": <Shield size={24} className="text-vinch-gold" />,
  "Lightweight Structure": <Feather size={24} className="text-vinch-gold" />,
  "Soft Interior": <Sparkles size={24} className="text-vinch-gold" />,
  "Timeless Silhouette": <Clock size={24} className="text-vinch-gold" />
};

const ProductExperience = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-vinch-beige/30">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Left Side - Visual Showcase */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] relative z-10 overflow-hidden shadow-3xl">
              <img 
                src={content.experience.mainImage} 
                alt="Product Detail" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-vinch-espresso/5"></div>
            </div>
            
            {/* Floating Detail Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -right-12 -bottom-12 w-2/3 aspect-square hidden md:block z-20 border-[12px] border-vinch-cream shadow-2xl overflow-hidden"
            >
              <img 
                src={content.experience.secondaryImage} 
                alt="Texture Detail" 
                className="w-full h-full object-cover scale-150"
              />
            </motion.div>
          </motion.div>

          {/* Right Side - Details */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-[11px] tracking-[0.4em] font-sans font-semibold text-vinch-espresso/40 uppercase mb-4">
                {content.experience.tagline}
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-vinch-espresso mb-12 leading-tight">
                {content.experience.headline}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
                {content.experience.features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col space-y-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                      {iconMap[feature.title] || <Shield size={24} className="text-vinch-gold" />}
                    </div>
                    <h3 className="text-sm tracking-[0.1em] font-sans font-bold text-vinch-espresso uppercase">
                      {feature.title}
                    </h3>
                    <p className="text-[13px] text-vinch-espresso/60 font-sans leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="mt-16 px-10 py-4 border border-vinch-espresso text-vinch-espresso text-[11px] tracking-[0.3em] font-sans font-bold uppercase hover:bg-vinch-espresso hover:text-white transition-all duration-300"
              >
                Learn More About Our Craftsmanship
              </motion.button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductExperience;
