import { motion } from 'framer-motion';
import { Settings, Cpu, MapPin } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Settings className="w-10 h-10 text-zinc-300" />,
      title: "1. Enter Preferences",
      desc: "Tell us your vibe. Adventure? Relaxation? Budget? We capture your exact travel persona."
    },
    {
      icon: <Cpu className="w-10 h-10 text-zinc-300" />,
      title: "2. AI Analyzes Data",
      desc: "Our engine cross-references live flight data, accommodation availability, and local crowd metrics."
    },
    {
      icon: <MapPin className="w-10 h-10 text-zinc-300" />,
      title: "3. Get Optimized Routes",
      desc: "Receive a dynamic, beautiful itinerary that lives on your phone and adapts on the fly."
    }
  ];

  return (
    <section className="py-24 relative bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            How <span className="text-white">TripSphere</span> Works
          </motion.h2>
        </div>

        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-0.5" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Glowing Number Circle */}
                <div className="w-32 h-32 rounded-full bg-[#0a0a0a] border border-zinc-800 flex items-center justify-center mb-8 relative z-10 hover: transition-all duration-500">
                  <div className="absolute inset-2 rounded-full border border-zinc-800 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-zinc-400 leading-relaxed max-w-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
