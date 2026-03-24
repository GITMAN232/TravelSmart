import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Map as MapIcon, Calendar, Filter, Star, Clock, Heart } from 'lucide-react';
import Button from '../common/Button';

const Demo = () => {
  const [activeTab, setActiveTab] = useState('map');

  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-800 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Experience the <span className="text-white">TripSphere UI</span>
          </motion.h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A sneak peek into the beautiful, intuitive interface you'll be using to plan your next extraordinary journey.
          </p>
        </div>

        {/* Mock UI Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto rounded-3xl overflow-hidden bg-[#0a0a0a] border border-zinc-800 border border-zinc-800  bg-[#0a0a0a]"
        >
          {/* Mock Header */}
          <div className="px-6 py-4 border-b border-zinc-800 bg-[#0a0a0a] flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
            </div>
            
            <div className="flex-1 max-w-md mx-8 flex items-center bg-black border border-zinc-800 rounded-full px-4 py-2">
              <Search className="w-4 h-4 text-zinc-400 mr-2" />
              <input 
                type="text" 
                placeholder="Where to next?" 
                className="bg-transparent border-none outline-none text-sm text-white w-full placeholder-slate-500"
                disabled
              />
              <div className="pl-3 border-l border-zinc-800 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-zinc-400" />
                <span className="text-xs text-zinc-400">Oct 12 - 18</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
               <button className="text-zinc-400 hover:text-white transition"><Filter className="w-5 h-5"/></button>
               <div className="w-8 h-8 rounded-full p-[2px]">
                 <div className="w-full h-full rounded-full bg-black border-2 border-transparent"></div>
               </div>
            </div>
          </div>

          <div className="flex h-[500px]">
            {/* Sidebar */}
            <div className="w-1/3 border-r border-zinc-800 p-4 flex flex-col gap-4 overflow-y-hidden relative group">
              <h3 className="text-lg font-bold text-white mb-2">Recommended for Action</h3>
              
              {[1, 2].map((i) => (
                <div key={i} className="bg-[#0a0a0a] rounded-xl p-3 border border-zinc-800 hover:border-zinc-800 cursor-pointer transition-colors group/card">
                   <div className="h-32 rounded-lg bg-[url('https://images.unsplash.com/photo-1542051842857-df0e2a9b3d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center mb-3 relative overflow-hidden">
                     <div className="absolute top-2 right-2 p-1.5 bg-black/40 backdrop-blur-md rounded-full">
                       <Heart className="w-4 h-4 text-white" />
                     </div>
                   </div>
                   <div className="flex justify-between items-start">
                     <div>
                       <h4 className="font-semibold text-white">Kyoto Heritage Trail</h4>
                       <p className="text-xs text-zinc-400 flex items-center mt-1"><Clock className="w-3 h-3 mr-1"/> 4h duration</p>
                     </div>
                     <div className="flex items-center text-xs text-zinc-300 font-medium">
                       <Star className="w-3 h-3 mr-1 fill-amber-400"/> 4.9
                     </div>
                   </div>
                </div>
              ))}
              
              {/* Fade out bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-12"></div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 relative bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-lighten opacity-80">
              <div className="absolute inset-0 bg-black/60 mix-blend-overlay"></div>
              
              {/* Mock Map Markers */}
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 left-1/3 w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center border border-zinc-800 backdrop-blur-sm"
              >
                <div className="w-3 h-3 bg-zinc-800 rounded-full "></div>
              </motion.div>

              <motion.div 
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 right-1/4 w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center border border-zinc-800 backdrop-blur-sm"
              >
                <div className="w-3 h-3 bg-zinc-800 rounded-full "></div>
              </motion.div>

              {/* Floating Graph Info */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#0a0a0a] border border-zinc-800 rounded-2xl p-4 border border-zinc-800 flex items-end justify-between">
                 <div>
                   <h4 className="text-sm font-bold text-white mb-2">Crowd Density Forecast</h4>
                   <div className="flex items-end gap-1 h-12">
                     {[30, 45, 20, 60, 80, 50, 40, 25, 40, 70, 90, 60].map((h, i) => (
                       <div key={i} className="w-6 bg-zinc-800 rounded-t-sm relative group">
                          <div style={{ height: `${h}%` }} className={`w-full absolute bottom-0 rounded-t-sm transition-all duration-300 ${h > 70 ? 'bg-rose-500' : h > 40 ? 'bg-amber-400' : 'bg-emerald-400'}`}></div>
                       </div>
                     ))}
                   </div>
                   <div className="flex justify-between w-full mt-2 text-[10px] text-zinc-400">
                     <span>8 AM</span>
                     <span>12 PM</span>
                     <span>4 PM</span>
                     <span>8 PM</span>
                   </div>
                 </div>
                 <Button variant="primary" size="sm">Generate Route</Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Demo;
