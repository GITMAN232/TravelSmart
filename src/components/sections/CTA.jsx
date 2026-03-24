import { motion } from 'framer-motion';
import Button from '../common/Button';

const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-black border-t border-zinc-800">
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-white mb-10 tracking-tighter"
        >
          Start your journey.
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Button variant="primary" size="lg">
            Create Free Account
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
