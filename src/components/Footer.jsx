import React from 'react';
import { Instagram, Twitter, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = React.useState('');
  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    // Store email in localStorage array "subscribers"
    const existing = JSON.parse(localStorage.getItem('subscribers') || '[]');
    if (!existing.includes(email)) {
      existing.push(email);
      localStorage.setItem('subscribers', JSON.stringify(existing));
    }
    // Optionally clear input after subscribe
    setEmail('');
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-vinch-espresso text-vinch-cream py-24 px-6 md:px-12">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-20">

          {/* Brand Info */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl tracking-[0.4em] font-serif font-light mb-8">VINCH</h2>
            <p className="text-sm text-vinch-cream/60 leading-relaxed max-w-xs mb-8">
              Modern handbags that move with you through every version of your life. Quiet luxury, crafted with intention.
            </p>
            <div className="flex space-x-6">
              <Instagram size={20} className="text-vinch-cream/60 hover:text-vinch-gold transition-colors cursor-pointer" />
              <Twitter size={20} className="text-vinch-cream/60 hover:text-vinch-gold transition-colors cursor-pointer" />
              <Linkedin size={20} className="text-vinch-cream/60 hover:text-vinch-gold transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-[11px] tracking-[0.3em] font-sans font-bold uppercase mb-8 text-vinch-gold">Shop</h3>
            <ul className="space-y-4">
              {['All Bags', 'Tote Bags', 'Shoulder Bags', 'Crossbody Bags', 'New Arrivals'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[11px] tracking-[0.1em] font-sans text-vinch-cream/50 hover:text-vinch-cream transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.3em] font-sans font-bold uppercase mb-8 text-vinch-gold">Brand</h3>
            <ul className="space-y-4">
              {['About VINCH', 'Our Craftsmanship', 'Sustainability', 'Journal', 'Lookbook'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[11px] tracking-[0.1em] font-sans text-vinch-cream/50 hover:text-vinch-cream transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.3em] font-sans font-bold uppercase mb-8 text-vinch-gold">Customer Care</h3>
            <ul className="space-y-4">
              {['Shipping & Delivery', 'Returns & Exchanges', 'FAQs', 'Care Guide', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[11px] tracking-[0.1em] font-sans text-vinch-cream/50 hover:text-vinch-cream transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-12 border-t border-vinch-cream/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] tracking-[0.2em] font-sans text-vinch-cream/30">
            © 2026 VINCH. ALL RIGHTS RESERVED.
          </p>

          <div className="flex space-x-8 text-[10px] tracking-[0.2em] font-sans text-vinch-cream/30">
            <a href="#" className="hover:text-vinch-cream transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-vinch-cream transition-colors">TERMS OF SERVICE</a>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-4 text-[10px] tracking-[0.2em] font-sans text-vinch-cream/50 hover:text-vinch-gold transition-colors"
          >
            <span>BACK TO TOP</span>
            <div className="w-8 h-8 rounded-full border border-vinch-cream/20 flex items-center justify-center group-hover:border-vinch-gold transition-colors">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
