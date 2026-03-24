import { motion } from 'framer-motion';
import { Navigation, Users, ShieldAlert } from 'lucide-react';

const ProductPreview = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative mx-auto max-w-6xl rounded-3xl border border-zinc-800 bg-[#0a0a0a] overflow-hidden"
        >
          {/* Dashboard Header Mock */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-[#0a0a0a]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-zinc-800" />
              <div className="w-3 h-3 rounded-full bg-zinc-800" />
              <div className="w-3 h-3 rounded-full bg-zinc-800" />
            </div>
            <div className="px-4 py-1.5 rounded-lg bg-black border border-zinc-800 text-xs text-zinc-500 font-mono tracking-widest">
              APP.TRIPSPHERE.AI // ROUTING
            </div>
            <div className="w-10" />
          </div>
          
          {/* Dashboard Body Mock */}
          <div className="flex flex-col md:flex-row h-[600px] w-full bg-[#0a0a0a]">
            {/* Sidebar Routes */}
            <div className="w-full md:w-80 border-r border-zinc-800 p-6 flex flex-col gap-4 bg-black">
              <div className="flex items-center justify-between mb-4">
                 <h3 className="text-white text-sm tracking-wide font-medium">ACTIVE ROUTE</h3>
                 <Navigation className="w-4 h-4 text-zinc-400" />
              </div>
              
              <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-white text-sm font-medium">Paris Central</span>
                  <span className="text-xs text-zinc-400 font-semibold">12 min</span>
                </div>
                <div className="text-xs text-zinc-500">Optimized for low crowds</div>
              </div>

              <div className="p-4 rounded-2xl bg-black border border-zinc-800 opacity-50">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-white text-sm font-medium">Louvre District</span>
                  <span className="text-xs text-zinc-400">24 min</span>
                </div>
                <div className="text-xs text-zinc-500">Heavy traffic detected</div>
              </div>
              
              <div className="mt-auto p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex gap-4 items-center">
                 <div className="p-2.5 bg-black rounded-xl border border-zinc-800">
                    <ShieldAlert className="w-5 h-5 text-white" />
                 </div>
                 <div>
                    <h4 className="text-sm text-white font-medium">Secure Mode</h4>
                    <p className="text-xs text-zinc-500">Monitoring anomalies</p>
                 </div>
              </div>
            </div>

            {/* Main Map View */}
            <div className="flex-1 relative overflow-hidden bg-black">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-40 filter grayscale"></div>
              <div className="absolute inset-0"></div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-zinc-800 rounded-full flex items-center justify-center">
                 <div className="w-32 h-32 border border-zinc-700 rounded-full flex items-center justify-center relative">
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full border border-zinc-500"
                    />
                    <div className="w-3 h-3 bg-white rounded-full" />
                 </div>
              </div>

              <div className="absolute top-6 right-6 p-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-zinc-800 flex items-center gap-4">
                 <div className="relative">
                   <Users className="w-5 h-5 text-white" />
                   <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full" />
                 </div>
                 <div className="flex flex-col">
                   <span className="text-xs text-zinc-500 font-medium">Area Density</span>
                   <span className="text-sm text-white font-semibold">Moderate</span>
                 </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductPreview;
