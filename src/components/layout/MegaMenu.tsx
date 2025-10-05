import { Link } from 'react-router-dom';

const menuData = {
  about: [
    { href: "/about#story", label: "My Story" },
    { href: "/about#principles", label: "Principles" },
    { href: "/about#stack", label: "My Stack" },
    { href: "/about#journey", label: "Journey" },
    { href: "/about#partnerships", label: "Partnerships" },
    { href: "/about#testimonials", label: "Testimonials" },
  ],
  caseStudies: [
    { href: "/case-studies", label: "All Case Studies" },
    { href: "/deep/the-launchpad", label: "The Launchpad" },
    { href: "/deep/the-guardian", label: "The Guardian" },
    { href: "/deep/the-compass", label: "The Compass" },
  ],
  more: [
    { href: "/projects", label: "Projects" },
    { href: "/toolbox", label: "Toolbox" },
    { href: "/contact", label: "Contact" },
  ],
  resume: [
    { href: "/resume", label: "Download Resume" },
    { href: "/cv", label: "Download CV" },
  ]
};

const MegaMenu = () => {
  return (
    <nav className="relative">
      <ul className="flex items-center space-x-8 text-sm font-semibold text-slate-300">
        <li className="group">
          <span className="cursor-pointer hover:text-white transition-colors">About</span>
          <div className="absolute top-full -left-8 w-auto bg-black/80 backdrop-blur-lg border border-white/10 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
            <div className="p-6">
              <h3 className="text-white font-bold mb-3">About Me</h3>
              <ul className="space-y-2">
                {menuData.about.map(item => (
                  <li key={item.href}><Link to={item.href} className="hover:text-accentCyan transition-colors">{item.label}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </li>
        <li className="group">
          <span className="cursor-pointer hover:text-white transition-colors">Case Studies</span>
          <div className="absolute top-full -left-8 w-auto bg-black/80 backdrop-blur-lg border border-white/10 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
            <div className="p-6">
              <h3 className="text-white font-bold mb-3">Featured Work</h3>
              <ul className="space-y-2">
                {menuData.caseStudies.map(item => (
                  <li key={item.href}><Link to={item.href} className="hover:text-accentCyan transition-colors">{item.label}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </li>
        <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
        <li><Link to="/toolbox" className="hover:text-white transition-colors">Toolbox</Link></li>
        <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default MegaMenu;
