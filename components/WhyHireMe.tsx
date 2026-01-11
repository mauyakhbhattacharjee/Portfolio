
import React from 'react';
import { ShieldCheck, Globe, Activity, CheckCircle2 } from 'lucide-react';
import { VALUE_PROPS } from '../constants';

const WhyHireMe: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Why <span className="text-green-500">Hire Me?</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">The unique value proposition of an Amazon-trained SEO Professional.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {VALUE_PROPS.map((prop, idx) => (
            <div key={idx} className="glass-card p-8 rounded-3xl border border-slate-800 hover:border-blue-500/30 transition-all group">
              <div className="mb-6 p-4 bg-slate-900/50 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                {prop.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{prop.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{prop.desc}</p>
              
              <div className="mt-8 flex items-center space-x-2 text-xs font-bold text-blue-400 uppercase tracking-widest">
                <CheckCircle2 className="w-4 h-4" />
                <span>Enterprise Quality</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-600/10 to-green-600/10 border border-slate-700/50 p-8 lg:p-12 rounded-[2.5rem] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 text-center lg:text-left">
            <h3 className="text-2xl lg:text-3xl font-bold text-white">Ready to scale your organic performance?</h3>
            <p className="text-slate-400 max-w-xl">Let's discuss how my operational background at Amazon can bring new rigor to your SEO strategy.</p>
          </div>
          <a 
            href="#contact" 
            className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-200 transition-all shadow-xl whitespace-nowrap"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
