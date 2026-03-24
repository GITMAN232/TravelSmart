import { motion } from 'framer-motion';
import { TreePine, Droplets, Wind } from 'lucide-react';

const Sustainability = () => {
  const stats = [
    { icon: <TreePine className="w-8 h-8 text-zinc-300" />, value: "2M+", label: "Trees Saved Equivalency" },
    { icon: <Droplets className="w-8 h-8 text-zinc-300" />, value: "15%", label: "Average Carbon Reduction per Trip" },
    { icon: <Wind className="w-8 h-8 text-sky-400" />, value: "45K", label: "Tons of Emissions Averted" },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-zinc-800 border-t border-zinc-800">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5 mix-blend-luminosity"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-800 backdrop-blur-sm">
             <span className="text-sm font-semibold text-zinc-300">Eco-Friendly First</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Travel without leaving a trace.
          </h2>
          <p className="text-lg text-zinc-300/70">
            Our AI optimizes your routes not just for speed, but for minimal carbon impact, directing you toward certified eco-friendly transports and green accommodations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-[#0a0a0a] border border-zinc-800 bg-zinc-800 border-zinc-800 rounded-2xl p-8 hover:border-zinc-800 transition-colors"
            >
              <div className="mb-6 inline-flex p-4 rounded-full bg-zinc-800 border border-zinc-800">
                {stat.icon}
              </div>
              <motion.div 
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: 0.3 + (idx * 0.1) }}
                className="text-4xl md:text-5xl font-black text-white mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-zinc-300/60 font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
