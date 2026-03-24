import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section className="py-32 bg-black overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-6xl text-center z-10 relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
        >
          Designed for the <br className="md:hidden"/><span className="text-zinc-400">Modern Explorer.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-zinc-400 mb-16 max-w-2xl mx-auto"
        >
          Immerse yourself in a world-class interface that brings the globe to your fingertips. 
        </motion.p>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
           className="relative aspect-video w-full rounded-2xl overflow-hidden border border-zinc-800"
        >
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-30 filter grayscale mix-blend-screen" />
           <div className="absolute inset-0 from-[#0a0a0a] opacity-80" />
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
