import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-zinc-800 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 max-w-6xl flex items-center justify-between">
        <a href="/" className="text-white font-bold text-xl tracking-tight">
          TripSphere
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">Product</a>
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors hidden sm:block">Log in</a>
          <Button variant="primary" size="sm">Get Started</Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
