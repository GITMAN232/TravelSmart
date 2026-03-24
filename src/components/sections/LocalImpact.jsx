import { motion } from 'framer-motion';
import Card from '../common/Card';
import { Store, Coffee, Navigation } from 'lucide-react';

const LocalImpact = () => {
  const providers = [
    {
      name: "Mei's Tea Ceremony",
      type: "Cultural Experience",
      image: "https://images.unsplash.com/photo-1545041042-3a95d52ad627?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Coffee className="w-5 h-5 text-zinc-300" />
    },
    {
      name: "Trekking with Marco",
      type: "Local Guide",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Navigation className="w-5 h-5 text-zinc-300" />
    },
    {
      name: "Ceramics by Elena",
      type: "Artisan Workshop",
      image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: <Store className="w-5 h-5 text-zinc-300" />
    }
  ];

  return (
    <section className="py-24 relative bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Fuel the <span className="text-white">Local Economy</span>.
            </h2>
            <p className="text-lg text-zinc-400 mb-6">
              Skip the massive conglomerates. TripSphere directs you to hidden gems, empowering local businesses, certified local guides, and generational artisans.
            </p>
            <p className="text-zinc-400">
              When you book through our smart suggestions, up to 90% of the revenue stays within the local community, preserving cultural heritage and combating the negative effects of hyper-tourism.
            </p>
          </motion.div>

          <div className="w-full md:w-1/2">
            <div className="grid gap-6">
              {providers.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                >
                  <Card hover={true} className="flex flex-row items-center gap-6 p-4 border border-zinc-800 bg-[#0a0a0a]/50 cursor-pointer">
                     <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 relative">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                     </div>
                     <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-1">{item.name}</h4>
                        <div className="flex items-center text-sm text-zinc-400 gap-2">
                           {item.icon}
                           {item.type}
                        </div>
                     </div>
                     <div className="text-zinc-400 p-2">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                     </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocalImpact;
