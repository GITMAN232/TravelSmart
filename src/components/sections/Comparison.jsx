import { motion } from 'framer-motion';
import { Check, X, Plane, RefreshCw, Network } from 'lucide-react';

const Comparison = () => {
  const features = [
    { name: "Live Route Adjustment", ours: true, theirs: false, icon: <RefreshCw className="w-5 h-5 text-zinc-400" /> },
    { name: "Predictive Crowd Mapping", ours: true, theirs: false, icon: <Network className="w-5 h-5 text-zinc-400" /> },
    { name: "Flight & Hotel Booking", ours: true, theirs: true, icon: <Plane className="w-5 h-5 text-zinc-400" /> },
    { name: "Eco-Impact Tracking", ours: true, theirs: false, icon: <Check className="w-5 h-5 text-zinc-400" /> },
    { name: "Direct Local Vendor Sync", ours: true, theirs: false, icon: <Check className="w-5 h-5 text-zinc-400" /> },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-black border-t border-zinc-800">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-zinc-800 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
          >
            Why Choose <span className="text-white">TripSphere?</span>
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a0a0a] border border-zinc-800 rounded-3xl border border-zinc-800 overflow-hidden  relative"
        >
          {/* Glowing Outline Background */}
          <div className="absolute inset-0 opacity-30"></div>
          
          <table className="w-full text-left border-collapse relative z-10">
            <thead>
              <tr className="border-b border-zinc-800 bg-[#0a0a0a]">
                <th className="py-5 px-6 font-bold text-white w-1/2 text-lg">Feature</th>
                <th className="py-5 px-6 text-center border-l border-zinc-800 w-1/4">
                   <div className="text-xl font-black text-transparent bg-clip-text drop-">
                     TripSphere
                   </div>
                </th>
                <th className="py-5 px-6 font-medium text-zinc-400 text-center w-1/4">Others</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feat, idx) => (
                <tr key={idx} className="border-b border-zinc-800 hover:bg-[#0a0a0a]/30 transition-colors">
                  <td className="py-5 px-6 flex items-center gap-4 text-slate-200 font-medium">
                    {feat.icon}
                    {feat.name}
                  </td>
                  <td className="py-5 px-6 text-center border-l border-zinc-800 bg-zinc-800 hover:bg-neonpurple-500/10 transition-colors">
                    {feat.ours ? (
                      <Check className="w-6 h-6 text-zinc-300 font-bold mx-auto drop-" />
                    ) : (
                      <X className="w-6 h-6 text-zinc-400 mx-auto" />
                    )}
                  </td>
                  <td className="py-5 px-6 text-center">
                    {feat.theirs ? (
                      <Check className="w-6 h-6 text-zinc-400 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-zinc-300/50 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;
