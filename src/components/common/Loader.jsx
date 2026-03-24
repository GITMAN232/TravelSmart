import { motion } from 'framer-motion';
import { Map } from 'lucide-react';

const Loader = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden"
    >
      {/* Ambient white glow */}
      <div className="absolute w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]" />

      {/* Map Scanning Animation */}
      <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
        {/* The Map Icon */}
        <Map className="w-32 h-32 md:w-40 md:h-40 text-white/20 absolute" />
        
        {/* Glow behind map */}
        <div className="absolute inset-0 bg-white/5 rounded-full blur-2xl" />

        {/* The Scanning Laser Line */}
        <motion.div
          animate={{ y: [-80, 80, -80] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute w-full h-[2px] bg-white "
        />
        
        {/* Scanning Overlay (lighter portion above laser) */}
        <motion.div
          animate={{ height: ['0%', '100%', '0%'], top: ['50%', '0%', '50%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute w-full bg-white/5 mix-blend-screen"
        />
      </div>

      <motion.div 
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="mt-12 text-center relative z-10"
      >
        <p className="text-zinc-400 text-sm md:text-base tracking-[0.2em] font-medium uppercase">
          TripSphere AI &ndash; Analyzing globe data...
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
