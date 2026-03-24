import { motion } from 'framer-motion';
import Button from '../common/Button';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center mt-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center max-w-3xl"
        >
          
          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter leading-tight">
            Travel Smart.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-zinc-400 mb-12 font-medium max-w-2xl">
            Experience the world seamlessly with AI-driven routing, crowd analytics, and premium collaboration.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
            <Button variant="secondary" size="lg">
              Explore
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
