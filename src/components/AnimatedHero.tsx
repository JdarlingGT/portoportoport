import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AnimatedHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Particle animation
    if (particlesRef.current) {
      const particles = particlesRef.current.querySelectorAll('.particle');
      particles.forEach((particle) => {
        gsap.to(particle, {
          x: () => gsap.utils.random(-100, 100),
          y: () => gsap.utils.random(-100, 100),
          scale: () => gsap.utils.random(0.5, 2),
          opacity: 0.6,
          duration: gsap.utils.random(2, 4),
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut'
        });
      });
    }

    // Title animation
    gsap.from('.hero-title', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.hero-subtitle', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out'
    });

    // Stats animation
    gsap.from('.stat-card', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      delay: 0.6,
      ease: 'power2.out'
    });

    // Floating elements
    gsap.to('.float-element', {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Gradient animation
    const tl = gsap.timeline({ repeat: -1 });
    tl.to('.hero-gradient', {
      backgroundPosition: '200% center',
      duration: 8,
      ease: 'none'
    });
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-gradient opacity-20"></div>
      
      {/* Particle System */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0
            }}
          />
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <div className="float-element inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-300 font-medium">Marketing Strategy Meets Technical Excellence</span>
        </div>

        {/* Main Heading */}
        <h1 ref={textRef} className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          <span className="block text-white">Transform Ideas Into</span>
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Measurable Results
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          I don't just build marketing campaigns—I architect complete growth systems that combine 
          <span className="text-cyan-400 font-semibold"> data-driven strategy</span>, 
          <span className="text-blue-400 font-semibold"> creative execution</span>, and 
          <span className="text-purple-400 font-semibold"> technical innovation</span>.
        </p>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {[
            { value: '300%', label: 'Avg ROI Increase' },
            { value: '50+', label: 'Systems Built' },
            { value: '3M+', label: 'Users Reached' },
            { value: '99.9%', label: 'Uptime' }
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/case-studies"
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2"
          >
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/gallery"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
          >
            Design Portfolio
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 float-element">
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-gray-500 text-sm mt-2">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
}
