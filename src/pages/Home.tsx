import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Users, Zap, Award, Target, Code, Settings, CheckCircle, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedHero from '../components/AnimatedHero';

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const valueBlocks = [
  {
    icon: Target,
    title: "Strategic Vision",
    description: "Data-driven marketing strategies that deliver measurable results and sustainable growth.",
    href: "/case-studies"
  },
  {
    icon: Zap,
    title: "Technical Excellence", 
    description: "Robust systems architecture and automation that scales with your business needs.",
    href: "/toolbox"
  },
  {
    icon: Users,
    title: "Cross-Functional Leadership",
    description: "Bridging marketing vision with technical execution through collaborative team leadership.",
    href: "/about"
  }
];

const testimonials = [
  {
    quote: "Jacob's unique combination of marketing insight and technical expertise transformed our go-to-market strategy. The results exceeded all expectations.",
    author: "Sarah Chen",
    role: "VP of Marketing, TechCorp",
    rating: 5
  },
  {
    quote: "The systems Jacob built increased our conversion rates by 300% while reducing operational overhead. A true game-changer for our business.",
    author: "Michael Rodriguez", 
    role: "CEO, GrowthLabs",
    rating: 5
  }
];

const stats = [
  { value: "150%", label: "Average ROI Increase" },
  { value: "50+", label: "Systems Deployed" },
  { value: "3M+", label: "Users Impacted" },
  { value: "99.9%", label: "Uptime Achieved" }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">
      {/* Animated Hero Section */}
      <AnimatedHero />

      {/* Tech Pipeline Section */}
      <motion.section 
        className="py-20 px-6 bg-gradient-to-b from-slate-900/50 to-transparent"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={slideUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Development Pipeline</h2>
            <p className="text-gray-400 text-lg">From concept to deployment - systematic excellence</p>
          </motion.div>
          
          {/* CI/CD Pipeline Visual */}
          <motion.div 
            className="flex items-center justify-between space-x-4 mb-12 overflow-x-auto"
            variants={slideUp}
          >
            {[
              { icon: Code, label: "Code", color: "from-cyan-500 to-blue-600" },
              { icon: Settings, label: "Build", color: "from-blue-500 to-purple-600" },
              { icon: CheckCircle, label: "Test", color: "from-green-500 to-teal-600" },
              { icon: Rocket, label: "Deploy", color: "from-orange-500 to-red-600" }
            ].map((stage, index) => (
              <React.Fragment key={stage.label}>
                <motion.div
                  className="flex flex-col items-center space-y-3 min-w-[120px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${stage.color} flex items-center justify-center shadow-lg`}>
                    <stage.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm font-medium text-slate-300">{stage.label}</span>
                </motion.div>
                {index < 3 && (
                  <motion.div
                    className="hidden md:block flex-1 h-0.5 bg-gradient-to-r from-cyan-400/50 to-blue-500/50 mx-4"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: (index + 1) * 0.2, duration: 0.5 }}
                  />
                )}
              </React.Fragment>
            ))}
          </motion.div>

          {/* Circuit Pattern Background */}
          <div className="relative">
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" viewBox="0 0 400 200">
                <defs>
                  <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0 20h40M20 0v40" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                    <circle cx="20" cy="20" r="2" fill="currentColor"/>
                    <circle cx="0" cy="20" r="1" fill="currentColor"/>
                    <circle cx="40" cy="20" r="1" fill="currentColor"/>
                    <circle cx="20" cy="0" r="1" fill="currentColor"/>
                    <circle cx="20" cy="40" r="1" fill="currentColor"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circuit)" className="text-cyan-400"/>
              </svg>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Value Blocks */}
      <motion.section 
        className="py-20 px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={slideUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Excellence</h2>
            <p className="text-gray-400 text-lg">Where marketing vision meets technical reality</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {valueBlocks.map((block, index) => (
              <motion.div key={block.title} variants={slideUp}>
                <Link 
                  to={block.href}
                  className="group block p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 h-full"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                    <block.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                    {block.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{block.description}</p>
                  <div className="flex items-center text-cyan-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Evidence-Based Approach Section */}
      <motion.section 
        className="py-20 px-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={slideUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Evidence-Based Strategy</h2>
            <p className="text-gray-400 text-lg">Data-driven decisions backed by proven methodologies</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Research Foundation",
                description: "Every strategy begins with comprehensive market research and competitive analysis",
                icon: "📊",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Technical Expertise",
                description: "Deep technical knowledge ensures solutions are both innovative and implementable",
                icon: "⚙️",
                color: "from-purple-500 to-blue-500"
              },
              {
                title: "Measurable Results",
                description: "Clear KPIs and continuous optimization deliver quantifiable business impact",
                icon: "📈",
                color: "from-green-500 to-blue-500"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className={`bg-gradient-to-br ${item.color} rounded-xl p-6 text-white`}
                variants={slideUp}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p className="text-blue-100">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Social Proof */}
      <motion.section 
        className="py-20 px-6 bg-white/5"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-16" variants={slideUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Clients Say</h2>
            <p className="text-gray-400 text-lg">Real feedback from real partnerships</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="p-6 bg-white/5 border border-white/10 rounded-xl"
                variants={slideUp}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div className="text-sm text-gray-400">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div>{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Row */}
      <motion.section 
        className="py-16 px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div key={index} variants={slideUp}>
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            variants={slideUp}
          >
            Ready to Build Something Great?
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto"
            variants={slideUp}
          >
            Let's discuss how strategic systems thinking can transform your marketing operations 
            and drive measurable growth.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={slideUp}
          >
            <Link 
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              Start a Conversation <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link 
              to="/case-studies"
              className="px-8 py-3 bg-white/10 border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
            >
              View Case Studies
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
