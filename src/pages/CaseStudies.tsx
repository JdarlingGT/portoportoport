import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Rocket, Shield, Compass, Castle, BarChart3, Cog, CreditCard, Zap, GitBranch, Target, MapPin, Server } from "lucide-react";
import data from "../data/caseStudies.json";
import { slideUp, staggerContainer } from "../styles/animations";

const FILTERS = ["All", "AI & Automation", "Analytics & Attribution", "Security & Performance", "Operations & Tools", "Sales & Payments", "DevOps & Deployment", "Frontend & UX", "Infrastructure & Reliability"] as const;

const iconMap = {
  Rocket,
  Shield,
  Compass,
  Castle,
  BarChart3,
  Cog,
  CreditCard,
  Zap,
  GitBranch,
  Target: Target,
  Map: MapPin,
  Server: Server
};

export default function CaseStudies() {
  const [q, setQ] = useState(""); 
  const [filter, setFilter] = useState<typeof FILTERS[number]>("All");

  const items = useMemo(() => {
    return (data as any[]).filter(i => {
      const matchFilter = filter === "All" || i.category === filter;
      const searchText = (i.title + " " + i.subtitle + " " + i.tags.join(" ")).toLowerCase();
      return matchFilter && searchText.includes(q.toLowerCase());
    });
  }, [q, filter]);

  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Project Deep Dives</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From spark to system—real solutions, measurable impact. Each case study shows the problem, 
            the approach, and the results.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <input 
            value={q} 
            onChange={e => setQ(e.target.value)} 
            placeholder="Search case studies..." 
            className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" 
          />
          <div className="flex flex-wrap gap-2">
            {FILTERS.map(filterOption => (
              <button 
                key={filterOption} 
                onClick={() => setFilter(filterOption)}
                className={`px-4 py-2 rounded-xl border transition-all ${
                  filter === filterOption 
                    ? "bg-cyan-500/20 border-cyan-500 text-cyan-400" 
                    : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                }`}
              >
                {filterOption}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          animate="show"
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item: any) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Zap;
            return (
              <motion.article key={item.id} variants={slideUp}>
                <Link 
                  to={`/case-studies/${item.slug}`}
                  className="group block p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 h-full"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs text-slate-400 uppercase tracking-wide">{item.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-3">{item.subtitle}</p>
                  <p className="text-slate-400 mb-4 leading-relaxed">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag: string) => (
                      <span key={tag} className="px-2 py-1 bg-white/10 rounded-md text-xs text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="text-cyan-400 text-sm font-semibold">
                    Impact: {item.impact}
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </motion.div>

        {items.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400">No case studies match your search criteria.</p>
          </div>
        )}
      </div>
    </main>
  );
}
