
import React from 'react';
import { BarChart2, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="flex justify-center items-center space-x-2">
          <div className="bg-gradient-to-br from-blue-500 to-green-500 p-2 rounded-lg">
            <BarChart2 className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white uppercase">Mauyakh</span>
        </div>
        
        <nav className="flex justify-center space-x-8">
          <a href="#about" className="text-slate-500 hover:text-white transition-colors">About</a>
          <a href="#projects" className="text-slate-500 hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="text-slate-500 hover:text-white transition-colors">Experience</a>
          <a href="#contact" className="text-slate-500 hover:text-white transition-colors">Contact</a>
        </nav>

        <div className="pt-8 text-slate-500 text-sm flex flex-col items-center gap-2">
          <p>© {new Date().getFullYear()} Mauyakh Bhattacharjee. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> & optimized for Google.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
