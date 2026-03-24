import { motion } from 'framer-motion';
import Card from '../common/Card';

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      title: "Digital Nomad",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      content: "TripSphere completely redirected me when a transport strike hit Paris. I didn't lose a single hour of my trip, and the AI found an incredible historic cafe nearby while I waited."
    },
    {
      name: "David Chen",
      title: "Eco-Traveler",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      content: "Finally, an app that actually cares about footprints. Watching my sustainability impact visually lower throughout my transit choices makes me feel better about exploring the world."
    },
    {
      name: "Elena Rodriguez",
      title: "Family Vacationer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      content: "No more crying kids in overwhelmed crowds. The predictive crowd map allowed us to see Rome's major landmarks with barely anyone around. A lifesaver."
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
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
          >
            Loved by <span className="text-white">Explorers</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <Card hover={true} className="h-full border border-zinc-800">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-zinc-800">
                     <img src={rev.avatar} alt={rev.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{rev.name}</h4>
                    <p className="text-xs text-zinc-400">{rev.title}</p>
                  </div>
                </div>
                <p className="text-zinc-400 italic">"{rev.content}"</p>
                {/* 5 star rating */}
                <div className="flex text-zinc-300 mt-4 space-x-1">
                   {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                   ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
