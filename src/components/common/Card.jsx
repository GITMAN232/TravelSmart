import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, glow = false }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -2, scale: 1.01 } : {}}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={`bg-apple-base/50 backdrop-blur-2xl border border-white/5 rounded-3xl p-6 relative overflow-hidden group ${
        glow ? 'hover: hover:border-white/20' : ''
      } transition-all duration-700 ease-apple-ease ${className}`}
    >
      {/* Subtle background glow effect on hover */}
      {glow && (
        <div className="absolute inset-0 from-white/0 to-apple-gray/0 group-hover:from-white/5 group-hover:to-apple-gray/5 transition-all duration-700 ease-apple-ease -z-10" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default Card;
