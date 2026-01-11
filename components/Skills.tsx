
import React from 'react';
import { Search, Globe, Cpu, PenTool, Zap, BarChart3 } from 'lucide-react';
import { SKILLS, TOOLS } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  PenTool: <PenTool className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  BarChart3: <BarChart3 className="w-6 h-6" />,
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">The SEO <span className="text-green-500">Arsenal</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Expertise in full-funnel organic growth strategy.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="glass-card p-8 rounded-2xl hover:border-blue-500/50 transition-all group">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl group-hover:scale-110 transition-transform">
                  {iconMap[skill.icon]}
                </div>
                <span className="text-slate-500 text-sm font-bold uppercase tracking-widest">{skill.level}% Proficiency</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{skill.name}</h3>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-green-400 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Power Tools I Use Every Day</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {TOOLS.map((tool) => (
              <div 
                key={tool} 
                className="px-6 py-3 bg-slate-800 border border-slate-700 text-slate-300 rounded-xl font-semibold hover:border-blue-400/50 hover:text-white transition-all cursor-default"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
