
import { motion } from 'framer-motion';
import { Mail, Calendar, MapPin } from 'lucide-react';
import { slideUp, staggerContainer } from '../styles/animations';
import Breadcrumbs from '../components/ui/Breadcrumbs';

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <Breadcrumbs />
        
        <motion.div 
          className="grid lg:grid-cols-2 gap-12"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.section variants={slideUp}>
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4">Let's Build Something Great</h1>
              <p className="text-slate-300 text-lg leading-relaxed">
                Strategy, implementation, or both—I bridge vision and execution to create 
                marketing systems that drive measurable growth.
              </p>
            </div>

            <div className="mb-8 space-y-4">
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>Currently available for new projects</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Remote-first, US timezone</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Calendar className="w-5 h-5 text-cyan-400" />
                <span>Typical response within 24 hours</span>
              </div>
            </div>

            <form 
              className="space-y-6" 
              action="https://formspree.io/f/your-form-id" 
              method="POST"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Your Name
                </label>
                <input 
                  id="name"
                  name="name" 
                  required 
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  aria-describedby="name-help"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input 
                  id="email"
                  type="email" 
                  name="email" 
                  required 
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  aria-describedby="email-help"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Project Details
                </label>
                <textarea 
                  id="message"
                  name="message" 
                  rows={6} 
                  required 
                  placeholder="Tell me about your project, challenges, or goals..."
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                  aria-describedby="message-help"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0F0F0F]"
              >
                Send Message
              </button>
            </form>
          </motion.section>

          <motion.aside variants={slideUp}>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-xl font-bold mb-4">Schedule a Call</h3>
              <p className="text-slate-300 mb-6">
                Prefer to talk? Book a 30-minute discovery call to discuss your project.
              </p>
              <div className="aspect-video rounded-xl overflow-hidden bg-white/5 border border-white/10">
                <iframe 
                  title="Schedule a Call" 
                  src="https://calendly.com/your-calendly-url" 
                  className="w-full h-full" 
                  loading="lazy"
                  frameBorder="0"
                />
              </div>
            </div>
          </motion.aside>
        </motion.div>
      </div>
    </main>
  );
}
