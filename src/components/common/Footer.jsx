import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-zinc-800">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-white font-bold tracking-tight text-xl">TripSphere</span>
        </div>
        
        <div className="flex items-center gap-8 text-sm text-zinc-500">
          <a href="#" className="hover:text-white transition-colors">Platform</a>
          <a href="#" className="hover:text-white transition-colors">Enterprise</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors flex items-center gap-1">Twitter <ArrowUpRight className="w-3 h-3"/></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
