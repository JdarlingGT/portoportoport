import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calculator, Compass, FileText, ArrowRight } from 'lucide-react';

const apps = [
  {
    title: "Clinical Compass",
    description: "Clinical reasoning + treatment protocol explorer",
    icon: Compass,
    href: "/apps/clinical-compass",
    stats: ["5m 12s avg session", "68% completions", "12 decision nodes"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30"
  },
  {
    title: "ROI Calculator",
    description: "Estimate revenue impact and time saved from automation",
    icon: Calculator,
    href: "/apps/roi",
    stats: ["7.3 avg inputs", "3.2 mo payback", "41% exports"],
    gradient: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/30"
  },
  {
    title: "License Requirements",
    description: "Look up license/CE rules by state & discipline",
    icon: FileText,
    href: "/apps/license",
    stats: ["50 states covered", "190ms lookup", "63% clipboard use"],
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30"
  }
];

export default function LiveApps() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Live Apps</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Interactive tools built for real-world workflows. Click to launch and explore.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, i) => {
            const IconComponent = app.icon;
            return (
              <motion.article
                key={app.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group"
              >
                <Link
                  to={app.href}
                  className={`block rounded-2xl overflow-hidden border ${app.border} bg-gradient-to-br ${app.gradient} backdrop-blur-sm hover:bg-white/10 transition-all duration-300 p-6 h-full`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${app.gradient} border ${app.border}`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {app.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                    {app.description}
                  </p>

                  <div className="space-y-2">
                    {app.stats.map((stat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
                        <span className="text-xs text-slate-400">{stat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="text-sm font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      Launch App →
                    </span>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
