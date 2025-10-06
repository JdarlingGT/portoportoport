import { motion } from 'framer-motion';
import PersonalGallery from '../components/ui/PersonalGallery';
import { slideUp, staggerContainer, fadeIn } from '../styles/animations';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white pt-28 pb-16">
      <motion.div 
        className="max-w-6xl mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={slideUp} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Behind the <span className="text-cyan-400">Scenes</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A glimpse into the person behind the portfolio. From professional moments to personal insights, 
            these images tell the story of my journey as a marketing strategist and systems architect.
          </p>
        </motion.div>

        <motion.div variants={fadeIn} className="mb-12">
          <PersonalGallery />
        </motion.div>

        <motion.div 
          variants={fadeIn} 
          className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
          <p className="text-slate-400 mb-6">
            Interested in working together or just want to chat about marketing technology? 
            I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              Get in Touch
            </a>
            <a 
              href="/case-studies"
              className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
            >
              View My Work
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Gallery;
