import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const anchors = [
  { id: 'story', label: 'My Story' },
  { id: 'principles', label: 'Principles' },
  { id: 'stack', label: 'MarTech Stack' },
  { id: 'journey', label: 'Journey' },
  { id: 'partnerships', label: 'Partnerships' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' }
];

export default function AnchorTOC() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-20% 0px -70% 0px' }
    );

    anchors.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Desktop Sticky TOC */}
      <nav className="hidden lg:block sticky top-32 space-y-2">
        {anchors.map(({ id, label }) => (
          <motion.button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
              activeSection === id
                ? 'bg-white/10 text-white'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
            whileHover={{ x: 4 }}
          >
            {label}
          </motion.button>
        ))}
      </nav>

      {/* Mobile Horizontal Chips */}
      <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 mb-6">
        {anchors.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`flex-shrink-0 px-3 py-1 text-xs rounded-full transition-colors ${
              activeSection === id
                ? 'bg-white/20 text-white'
                : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </>
  );
}
