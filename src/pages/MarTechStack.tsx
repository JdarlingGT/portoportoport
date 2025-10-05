import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Zap, BarChart3, Target, Map, Server, ArrowRight, TrendingUp } from "lucide-react";
import { TechGridPattern, FloatingParticles } from "../components/ui/BackgroundPatterns";

const projects = [
  {
    id: "enterprise-security",
    title: "Enterprise-Grade Security Overhaul",
    subtitle: "Multi-layered defense blocking 85K+ threats monthly",
    category: "Security & Infrastructure",
    icon: Shield,
    description: "Architected comprehensive edge-to-origin security strategy using Cloudflare WAF, rate limiting, and DNSSEC to eliminate malicious bot traffic and protect sensitive user data.",
    impact: "85K+ malicious hits blocked monthly",
    technologies: ["Cloudflare WAF", "DNSSEC", "Apache", "Rate Limiting"],
    color: "from-red-500/20 to-orange-600/20",
    borderColor: "border-red-500/30",
    iconColor: "text-red-400"
  },
  {
    id: "performance-optimization",
    title: "Full-Stack Performance Optimization",
    subtitle: "70% faster repeat visits through caching",
    category: "Performance & Reliability",
    icon: Zap,
    description: "Engineered multi-tier caching system with Cloudflare CDN, LiteSpeed, and asset optimization to dramatically improve Core Web Vitals and user experience.",
    impact: "70% faster repeat visits",
    technologies: ["Cloudflare CDN", "LiteSpeed Cache", "Brotli", "Critical CSS"],
    color: "from-yellow-500/20 to-amber-600/20",
    borderColor: "border-yellow-500/30",
    iconColor: "text-yellow-400"
  },
  {
    id: "marketing-analytics",
    title: "Unified Marketing Analytics Stack",
    subtitle: "Clean attribution improving ROAS significantly",
    category: "Marketing & Conversions",
    icon: BarChart3,
    description: "Rebuilt entire measurement stack in GTM with GA4 consolidation, eliminating attribution drift and enabling Smart Bidding optimization on quality conversion signals.",
    impact: "Significant ROAS improvement",
    technologies: ["Google Tag Manager", "GA4", "WooCommerce", "Smart Bidding"],
    color: "from-blue-500/20 to-cyan-600/20",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-400"
  },
  {
    id: "lead-conversion",
    title: "Intelligent Lead Conversion Tracking",
    subtitle: "Smart conversion tracking for quality leads",
    category: "Marketing & Conversions",
    icon: Target,
    description: "Custom PHP hooks and GTM triggers with RegEx filtering to distinguish high-value MQLs from low-intent inquiries, optimizing ad spend for lead quality.",
    impact: "Higher quality pipeline",
    technologies: ["PHP", "GTM RegEx", "Google Ads", "Custom Hooks"],
    color: "from-green-500/20 to-emerald-600/20",
    borderColor: "border-green-500/30",
    iconColor: "text-green-400"
  },
  {
    id: "interactive-maps",
    title: "Dynamic & Interactive Event Maps",
    subtitle: "Visual discovery boosting training signups",
    category: "Frontend & UX",
    icon: Map,
    description: "Replaced static event listings with interactive Google Maps integration, featuring geocoding, real-time filtering, and intuitive location-based discovery.",
    impact: "Increased engagement & signups",
    technologies: ["Google Maps API", "JavaScript", "WordPress CPTs", "Geocoding"],
    color: "from-purple-500/20 to-violet-600/20",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-400"
  },
  {
    id: "backend-reliability",
    title: "Backend Reliability & Server Tuning",
    subtitle: "Server optimization eliminating critical errors",
    category: "Performance & Reliability",
    icon: Server,
    description: "Deep server-level optimization with PHP-FPM tuning, Apache configuration, and real-time monitoring to eliminate 503/504 errors and memory exhaustion.",
    impact: "Critical errors eliminated",
    technologies: ["PHP-FPM", "Apache", "Netdata", "Memory Optimization"],
    color: "from-slate-500/20 to-gray-600/20",
    borderColor: "border-slate-500/30",
    iconColor: "text-slate-400"
  }
];

export default function MarTechStack() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Circuit Board Sphere Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <img 
              src="/assets/tech-backgrounds/circuit-sphere.png" 
              alt="Golden circuit board sphere representing integrated technology systems"
              className="w-96 h-96 object-contain"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 relative z-10">
            My Interactive <span className="text-cyan-400">MarTech Stack</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8 relative z-10">
            Six major integrated marketing technology projects that transformed business operations, 
            eliminated critical vulnerabilities, and delivered measurable ROI through strategic implementation.
          </p>
          <motion.div 
            className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-semibold mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            🚀 My Interactive MarTech Stack
          </motion.div>
        </motion.div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
            I don't just use tools—<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              I build integrated ecosystems
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Each project represents a complete solution architected from the ground up, 
            combining multiple technologies to solve complex business challenges and deliver measurable results.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">{projects.length}</div>
              <div className="text-sm text-slate-400">Complete Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">20+</div>
              <div className="text-sm text-slate-400">Technologies Used</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">85K+</div>
              <div className="text-sm text-slate-400">Monthly Impact</div>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, staggerChildren: 0.1 }}
        >
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  to={`/martech/${project.id}`}
                  className="group block h-full"
                >
                  <div className={`h-full p-8 bg-gradient-to-br ${project.color} backdrop-blur-sm border ${project.borderColor} rounded-2xl hover:scale-[1.02] transition-all duration-300`}>
                    
                    {/* Icon & Category */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-3 bg-white/10 rounded-xl ${project.iconColor}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs text-slate-400 bg-white/10 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 bg-white/10 rounded-full text-slate-300">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-white/10 rounded-full text-slate-400">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Impact & CTA */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-sm font-semibold text-green-400">
                          {project.impact}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold group-hover:gap-3 transition-all">
                        <span>Deep Dive</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="p-8 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Ready to Build Your MarTech Ecosystem?</h3>
            <p className="text-slate-300 mb-6">
              Let's discuss how I can architect integrated solutions that drive real business results for your organization.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/20 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors font-semibold"
            >
              <span>Start a Conversation</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
