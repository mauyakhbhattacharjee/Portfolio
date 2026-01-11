
import React from 'react';
import { GraduationCap, MapPin, Briefcase, Award, ShieldCheck, Globe, BookOpen, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/40 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Vertical Image Container - Specially framed for Mauyakh's Photo */}
          <div className="relative group mx-auto lg:mx-0 w-full max-w-[400px]">
            {/* Multi-layered border effect */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-green-400 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative aspect-[3/4.5] rounded-[2.2rem] overflow-hidden border border-slate-700 bg-slate-800 shadow-2xl">
              {/* Direct link to Google Drive image using the file ID provided */}
              <img 
                src="https://lh3.googleusercontent.com/d/1qC5y1hB2Qvib0WStCp_rCqIfKnmUixZb" 
                alt="Mauyakh Bhattacharjee" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                onError={(e) => {
                  // Fallback if the Google Drive link is blocked or expires
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
              
              {/* Floating Verified Badge */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[85%] glass-card p-4 rounded-2xl border border-white/10 flex items-center justify-between shadow-2xl backdrop-blur-xl">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-500/20 p-2 rounded-full">
                    <ShieldCheck className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-black text-xs uppercase tracking-widest">Mauyakh B.</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">SEO Executive</div>
                  </div>
                </div>
                <CheckCircle2 className="w-5 h-5 text-green-400" />
              </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute -top-6 -left-6 w-24 h-24 opacity-20" style={{ backgroundImage: 'radial-gradient(#60a5fa 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
          </div>

          {/* Narrative Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                <span className="text-[10px] font-black text-blue-300 uppercase tracking-[0.3em]">Personal Branding</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1]">
                Mastering the Art of <br />
                <span className="text-gradient">Organic Growth.</span>
              </h2>
              
              <p className="text-slate-300 leading-relaxed text-lg font-medium">
                I am <span className="text-white font-bold">Mauyakh Bhattacharjee</span>, an SEO Professional who believes search engine success is a blend of <span className="italic">semantic precision</span> and <span className="italic">operational excellence</span>.
              </p>
              
              <div className="space-y-5 text-slate-400 leading-relaxed text-base">
                <p>
                  With an <span className="text-white font-semibold">MA in English Literature</span> from Rabindra Bharati University, I bring a superior understanding of linguistic nuances to keyword strategy and content hub architecture. I don't just optimize for bots; I optimize for human intent.
                </p>
                <p>
                  My time at <span className="text-white font-semibold underline decoration-blue-500/30 underline-offset-4">Amazon</span> managing India and North America marketplaces gave me the "Amazon-standard" discipline for data-driven decision making and global client communication.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="group p-5 bg-slate-800/30 rounded-2xl border border-slate-700/50 hover:bg-slate-800/60 transition-all">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-500/10 rounded-xl group-hover:scale-110 transition-transform">
                    <BookOpen className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Expertise</div>
                    <div className="text-white font-bold text-sm">Semantic Content</div>
                  </div>
                </div>
              </div>
              <div className="group p-5 bg-slate-800/30 rounded-2xl border border-slate-700/50 hover:bg-slate-800/60 transition-all">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-500/10 rounded-xl group-hover:scale-110 transition-transform">
                    <Globe className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Marketplace</div>
                    <div className="text-white font-bold text-sm">Global Ops Rigor</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex items-center gap-8">
               <div className="flex items-center space-x-2">
                 <MapPin className="w-4 h-4 text-slate-500" />
                 <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Kolkata, India</span>
               </div>
               <div className="flex items-center space-x-2">
                 <Briefcase className="w-4 h-4 text-slate-500" />
                 <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Astellica Solutions</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
