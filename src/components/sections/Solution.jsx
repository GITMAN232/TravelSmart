import { motion } from 'framer-motion';
import { Bot, LineChart, ShieldCheck, Leaf } from 'lucide-react';

const Solution = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-zinc-800 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-800 backdrop-blur-sm">
              <span className="text-sm font-semibold text-zinc-300">Meet TripSphere AI</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Your Smart Travel <br/>
              <span className="text-white">Companion.</span>
            </h2>
            
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              We aggregate millions of data points—from live foot traffic and weather anomalies to local vendor networks—crafting an adaptive itinerary that shifts when the world shifts.
            </p>

            <ul className="space-y-4">
              {[
                "Continuously optimizing routes.",
                "Real-time safety and crowd alerts.",
                "Zero manual planning needed."
              ].map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="flex items-center gap-3 text-slate-200 font-medium"
                >
                  <div className="w-1.5 h-1.5 bg-zinc-800 rounded-full " />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            {/* Animated dashboard preview mock */}
            <div className="relative bg-[#0a0a0a] border border-zinc-800 rounded-2xl border border-zinc-800 p-6  from-glass">
              
              <div className="flex items-center justify-between mb-8 border-b border-zinc-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-zinc-800 rounded-lg">
                    <Bot className="w-6 h-6 text-zinc-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">AI Assistant</h4>
                    <p className="text-xs text-zinc-300">Monitoring Kyoto, Japan</p>
                  </div>
                </div>
                <div className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-medium text-zinc-300 flex items-center gap-2">
                  <div className="w-2 h-2 bg-zinc-800 rounded-full animate-pulse" />
                  Live Sync
                </div>
              </div>

              <div className="space-y-4">
                {/* Mock Card 1 */}
                <div className="bg-[#0a0a0a] border border-zinc-800 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <LineChart className="w-5 h-5 text-orange-400" />
                    <div>
                      <p className="text-sm font-medium text-white">Smart Itinerary Adjust</p>
                      <p className="text-xs text-zinc-400">Fushimi Inari crowded. Rerouting...</p>
                    </div>
                  </div>
                  <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">Action Taken</span>
                </div>

                {/* Mock Card 2 */}
                <div className="bg-[#0a0a0a] border border-zinc-800 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <ShieldCheck className="w-5 h-5 text-green-400" />
                    <div>
                      <p className="text-sm font-medium text-white">Safety Check</p>
                      <p className="text-xs text-zinc-400">Weather clear. No alerts in area.</p>
                    </div>
                  </div>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Secure</span>
                </div>

                {/* Mock Card 3 */}
                <div className="bg-[#0a0a0a] border border-zinc-800 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Leaf className="w-5 h-5 text-zinc-300" />
                    <div>
                      <p className="text-sm font-medium text-white">Sustainability Meter</p>
                      <p className="text-xs text-zinc-400">+12 Eco points gained</p>
                    </div>
                  </div>
                  <div className="w-16 h-2 bg-[#0a0a0a] rounded-full overflow-hidden">
                    <div className="w-[85%] h-full bg-zinc-800 rounded-full"></div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Solution;
