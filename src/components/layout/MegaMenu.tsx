import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import menuConfig from '../../data/menu.json';

interface MenuLink {
  label: string;
  href: string;
}

interface MenuColumn {
  label: string;
  links: MenuLink[];
}

const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="hidden lg:block">
        <button
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setIsOpen(!isOpen);
            }
            if (e.key === 'Escape') {
              setIsOpen(false);
            }
          }}
          aria-expanded={isOpen}
          aria-haspopup="true"
          className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
        >
          Menu
        </button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
              className="absolute top-full left-0 mt-2 w-[500px] bg-black/90 backdrop-blur-lg border border-white/10 rounded-xl shadow-2xl z-50"
            >
              <div className="grid grid-cols-3 gap-6 p-6">
                {menuConfig.columns.map((column: MenuColumn) => (
                  <div key={column.label} className="space-y-3">
                    <h3 className="text-white font-bold text-sm uppercase tracking-wide">
                      {column.label}
                    </h3>
                    <ul className="space-y-2">
                      {column.links.map((link: MenuLink) => (
                        <li key={link.href}>
                          <Link
                            to={link.href}
                            className="text-slate-300 hover:text-cyan-400 transition-colors text-sm block py-1"
                            onClick={() => setIsOpen(false)}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Simple navigation for smaller screens */}
      <div className="lg:hidden">
        <ul className="flex items-center space-x-4 text-sm font-semibold text-slate-300">
          <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
          <li><Link to="/case-studies" className="hover:text-white transition-colors">Cases</Link></li>
          <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default MegaMenu;
