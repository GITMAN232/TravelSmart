import { motion } from 'framer-motion';
import { Route, Zap, Shield, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    { icon: <Route className="w-6 h-6" />, title: 'Smart Routing', desc: 'AI-optimized paths to avoid crowds and save time.' },
    { icon: <Zap className="w-6 h-6" />, title: 'Real-Time Sync', desc: 'Instant itinerary updates across all your devices.' },
    { icon: <Shield className="w-6 h-6" />, title: 'Secure Zones', desc: 'Live monitoring of area safety and travel advisories.' },
    { icon: <Globe className="w-6 h-6" />, title: 'Global Network', desc: 'Access localized insights in over 150+ countries.' }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col items-start p-6 rounded-2xl bg-[#0a0a0a] border border-zinc-800 hover:bg-[#111111] transition-colors duration-500"
            >
              <div className="mb-6 text-white">
                {feature.icon}
              </div>
              <h3 className="text-white text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
