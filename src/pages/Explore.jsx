import { motion } from 'framer-motion';

const Explore = () => {
  return (
    <section className="pt-32 pb-20 min-h-screen px-4 max-w-7xl mx-auto flex flex-col items-center justify-center">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-6"
      >
        Explore Destinations
      </motion.h1>
      <p className="text-zinc-400">This feature is coming soon.</p>
    </section>
  );
};

export default Explore;
