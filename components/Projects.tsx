
import React from 'react';
import { ExternalLink, CheckCircle2, TrendingUp, MessageCircle } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">SEO <span className="text-gradient">Case Studies</span></h2>
            <p className="text-slate-400 max-w-xl">Proven strategies that drive measurable business impact and high organic rankings.</p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4 text-sm font-bold uppercase tracking-widest text-slate-500">
              <span>Strategy</span>
              <div className="w-12 h-[2px] bg-slate-800"></div>
              <span>Execution</span>
              <div className="w-12 h-[2px] bg-slate-800"></div>
              <span className="text-green-500">Results</span>
            </div>
          </div>
        </div>

        <div className="grid gap-20">
          {PROJECTS.map((project, idx) => (
            <div key={project.id} className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`space-y-8 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-bold uppercase tracking-widest">{project.category}</span>
                    {project.tags.map(tag => (
                      <span key={tag} className="text-slate-500 text-xs font-semibold">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed">{project.description}</p>
                </div>

                <div className="grid gap-6">
                  <div className="bg-slate-800/40 p-5 rounded-2xl border border-slate-700/50">
                    <h4 className="text-slate-200 font-bold mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span> The Challenge
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{project.problem}</p>
                  </div>
                  <div className="bg-slate-800/40 p-5 rounded-2xl border border-slate-700/50">
                    <h4 className="text-slate-200 font-bold mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span> The Strategy
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{project.strategy}</p>
                  </div>
                  <div className="bg-green-500/5 p-5 rounded-2xl border border-green-500/20">
                    <h4 className="text-green-400 font-bold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" /> The Result
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{project.result}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {project.stats.map((stat, i) => (
                    <div key={i} className="glass-card p-4 rounded-xl text-center">
                      <div className="text-slate-500 text-xs mb-1 font-bold uppercase tracking-widest">{stat.label}</div>
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-2xl font-bold text-white">{stat.value}</span>
                        {stat.trend === 'up' && <TrendingUp className="w-4 h-4 text-green-400" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`relative group ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-green-600/20 rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="relative overflow-hidden rounded-3xl border border-slate-700 shadow-2xl">
                  <img src={project.image} alt={project.title} className="w-full aspect-[4/3] object-cover" />
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center backdrop-blur-sm p-6 text-center">
                    <p className="text-white font-medium mb-4">Interested in similar growth for your brand?</p>
                    <a 
                      href={`https://wa.me/918272953676?text=Hi Mauyakh, I'm interested in the ${project.title} case study.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-slate-950 px-6 py-3 rounded-full font-bold flex items-center space-x-2 hover:scale-105 transition-transform"
                    >
                      <span>Inquire Now</span>
                      <MessageCircle className="w-4 h-4 text-green-600" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
