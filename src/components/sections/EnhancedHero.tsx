import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, ExternalLink, Sparkles } from 'lucide-react';

const taglines = [
  "Marketing Vision Meets Technical Reality",
  "Strategic Growth Through Systems Thinking", 
  "Building Bridges Between Business & Technology",
  "Data-Driven Marketing with Engineering Precision"
];

const stats = [
  { value: "150%", label: "Average ROI Increase" },
  { value: "50+", label: "Systems Deployed" },
  { value: "3M+", label: "Users Impacted" },
  { value: "99.9%", label: "Uptime Achieved" }
];

export default function EnhancedHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentTagline, setCurrentTagline] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface-dark"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-500/20 to-accent-cyan/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent-cyan/20 to-primary-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Noise Texture */}
        <div className="absolute inset-0 bg-noise opacity-30" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 text-center"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-medium/50 backdrop-blur-sm border border-primary-500/20 rounded-full text-sm text-text-secondary">
              <Sparkles className="w-4 h-4 text-primary-400" />
              Available for Strategic Partnerships
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="block text-text-primary">Jacob</span>
              <span className="block bg-gradient-to-r from-primary-400 via-accent-cyan to-primary-500 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
                Darling
              </span>
            </h1>
          </motion.div>

          {/* Rotating Taglines */}
          <motion.div variants={itemVariants} className="h-16 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentTagline}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl text-text-secondary max-w-3xl"
              >
                {taglines[currentTagline]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Professional Photo */}
          <motion.div variants={itemVariants}>
            <motion.div 
              variants={floatingVariants}
              animate="animate"
              className="relative mx-auto w-32 h-32 md:w-40 md:h-40"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-cyan rounded-full animate-pulse-glow" />
              <img
                src="/assets/personal/professional-headshot.jpg"
                alt="Jacob Darling - Professional Headshot"
                className="relative w-full h-full object-cover rounded-full border-4 border-surface-medium shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-cyan text-white rounded-2xl font-semibold shadow-brand-lg hover:shadow-glow-lg transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-surface-medium/50 backdrop-blur-sm border border-surface-light text-text-primary rounded-2xl font-semibold hover:bg-surface-light transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Download Resume
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={itemVariants} className="pt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-muted">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-text-muted rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
