
import React, { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare, Linkedin, Twitter, CheckCircle2, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate sending
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">Ready to Rank <span className="text-green-500">Higher?</span></h2>
              <p className="text-slate-400 text-lg">Whether you're looking for an SEO audit, content strategy, or a full-time SEO Executive, I'm just a message away.</p>
            </div>

            <div className="space-y-6">
              <a 
                href="https://wa.me/918272953676" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-6 bg-gradient-to-r from-green-600/10 to-green-600/5 rounded-2xl border border-green-500/20 hover:border-green-500/50 transition-all group shadow-lg shadow-green-900/10"
              >
                <div className="p-3 bg-green-500/10 rounded-xl group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="text-green-500/70 text-xs font-bold uppercase tracking-widest mb-1">Fastest Response</div>
                  <div className="text-white font-bold text-lg">Chat on WhatsApp</div>
                </div>
              </a>

              <a href="mailto:bmauyakh@gmail.com" className="flex items-center space-x-4 p-6 bg-slate-800/40 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all group">
                <div className="p-3 bg-blue-500/10 rounded-xl group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Email Me</div>
                  <div className="text-white font-bold">bmauyakh@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-6 bg-slate-800/40 rounded-2xl border border-slate-700/50">
                <div className="p-3 bg-slate-500/10 rounded-xl">
                  <MapPin className="w-6 h-6 text-slate-400" />
                </div>
                <div>
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Location</div>
                  <div className="text-white font-bold">Kolkata, India</div>
                </div>
              </div>
            </div>

            <div className="pt-8 space-y-4">
              <div className="text-slate-500 text-sm font-bold uppercase tracking-widest">Connect on Social</div>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/mauyakh-bhattacharjee/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-xl text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="p-3 bg-slate-800 rounded-xl text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-400">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-400">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400">Subject</label>
                <input 
                  type="text" 
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Inquiry about SEO Services"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400">Your Message</label>
                <textarea 
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Tell me about your project goals..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'sending' || status === 'sent'}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all active:scale-95 ${
                  status === 'sent' ? 'bg-green-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/20'
                }`}
              >
                {status === 'idle' && (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
                {status === 'sending' && <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>}
                {status === 'sent' && (
                  <>
                    <span>Message Sent!</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
