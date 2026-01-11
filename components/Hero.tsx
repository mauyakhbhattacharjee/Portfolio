
import React from 'react';
import { ArrowRight, Search, BarChart3, ChevronDown, MessageCircle, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-green-600/10 rounded-full blur-[150px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center space-x-2 bg-slate-800 border border-slate-700 px-4 py-2 rounded-full">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Enterprise SEO & Growth Strategy</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white">
              Accelerating <span className="text-gradient">Organic</span><br />
              Revenue Growth.
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Hi, I'm <span className="text-white font-semibold">Mauyakh Bhattacharjee</span>. I leverage operational excellence from <span className="text-white font-semibold">Amazon</span> and data-driven SEO architectures to scale global brands and maximize organic ROI.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#projects" 
                className="group w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-2 transition-all hover:bg-blue-700 active:scale-95 shadow-xl shadow-blue-600/20"
              >
                <span>Review Performance</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://wa.me/918272953676" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto border border-slate-700 bg-slate-900/50 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5 text-green-400" />
                <span>Schedule a Call</span>
              </a>
            </div>

            <div className="pt-8 flex items-center justify-center lg:justify-start space-x-8">
              <div className="flex items-center space-x-2">
                <Search className="w-5 h-5 text-green-500" />
                <span className="text-slate-500 font-bold uppercase text-xs tracking-wider">Search Strategy</span>
              </div>
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-blue-500" />
                <span className="text-slate-500 font-bold uppercase text-xs tracking-wider">ROI-Centric Growth</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative z-10 p-4">
              <div className="bg-slate-800/80 rounded-3xl border border-slate-700 p-8 shadow-2xl backdrop-blur-xl rotate-3 hover:rotate-0 transition-transform duration-700">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-slate-500 text-xs font-mono uppercase tracking-widest">Global_Operations_Metrics.json</div>
                </div>
                
                <div className="space-y-6">
                  <div className="h-32 bg-slate-900/50 rounded-xl border border-slate-700/50 p-4 flex items-end justify-between space-x-2">
                    {[50, 75, 55, 100, 80, 95, 110].map((h, i) => (
                      <div key={i} className="w-full bg-gradient-to-t from-blue-600 to-green-400 rounded-t-md transition-all duration-1000" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                      <div className="text-slate-500 text-[10px] font-bold uppercase mb-1">Market Efficiency</div>
                      <div className="text-xl font-extrabold text-white">99.8%</div>
                    </div>
                    <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                      <div className="text-slate-500 text-[10px] font-bold uppercase mb-1">Organic Visibility</div>
                      <div className="text-xl font-extrabold text-green-400">+210%</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="text-xs font-bold text-blue-300 uppercase tracking-widest">KPI Status: Performance Optimised</div>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Decorative background shape */}
              <div className="absolute -top-10 -right-10 w-full h-full bg-blue-600/10 rounded-3xl -z-10 rotate-12 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-slate-500" />
      </div>
    </section>
  );
};

export default Hero;
