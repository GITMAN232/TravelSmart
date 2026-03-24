import { motion } from 'framer-motion';
import Card from '../common/Card';
import { UserX, AlertTriangle, Map, Store } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: <UserX className="w-8 h-8 text-zinc-300" />,
      title: 'Overcrowding',
      description: 'Popular destinations are often packed, ruining the serene experience you came for.',
      delay: 0
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-zinc-300" />,
      title: 'Unsafe Travel',
      description: 'Lack of real-time insights can lead you into unsafe zones or highly disrupted areas.',
      delay: 0.1
    },
    {
      icon: <Map className="w-8 h-8 text-orange-500" />,
      title: 'Poor Planning',
      description: 'Static itineraries break the moment you encounter a delay or sudden crowd surge.',
      delay: 0.2
    },
    {
      icon: <Store className="w-8 h-8 text-red-500" />,
      title: 'Ignored Locals',
      description: 'Mainstream apps direct money to giants, leaving authentic local vendors hidden.',
      delay: 0.3
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-black border-t border-white/10">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white"
          >
            Travel is <span className="text-apple-gray">Broken.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-apple-gray font-medium"
          >
            We love exploring the globe, but the modern travel experience is riddled with friction. 
            It's time for a change.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((prob, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: prob.delay, duration: 0.5 }}
            >
              <Card hover={true} className="h-full border border-white/5 hover:border-white/20">
                <div className="bg-white/5 p-3 rounded-2xl inline-block mb-4 border border-white/10">
                  {prob.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{prob.title}</h3>
                <p className="text-apple-gray text-sm leading-relaxed">
                  {prob.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
