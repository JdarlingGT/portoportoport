
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Briefcase, User, Mail } from 'lucide-react';
import { slideUp, staggerContainer } from '../styles/animations';

const NotFound = () => {
  const quickLinks = [
    { label: "Home", href: "/", icon: Home },
    { label: "About", href: "/about", icon: User },
    { label: "Case Studies", href: "/case-studies", icon: Briefcase },
    { label: "Contact", href: "/contact", icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white flex items-center justify-center px-6">
      <motion.div 
        className="text-center max-w-2xl"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div 
          className="text-8xl font-bold text-cyan-400 mb-4"
          variants={slideUp}
        >
          404
        </motion.div>
        <motion.h1 
          className="text-3xl md:text-4xl font-bold mb-4"
          variants={slideUp}
        >
          Page Not Found
        </motion.h1>
        <motion.p 
          className="text-slate-400 text-lg mb-8"
          variants={slideUp}
        >
          The page you're looking for doesn't exist. Try these instead:
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={slideUp}
        >
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="group p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <link.icon className="w-6 h-6 mx-auto mb-2 text-cyan-400 group-hover:scale-110 transition-transform" />
              <div className="text-sm font-semibold">{link.label}</div>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
