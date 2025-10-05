import { motion } from "framer-motion";
import data from "../data/about.json";

export default function TimelineVertical() {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-white/20"></div>
      
      <div className="space-y-8">
        {data.timeline.map((item: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative pl-12"
          >
            {/* Timeline Node */}
            <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#0F0F0F]"></div>
            
            {/* Content Card */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-cyan-400 font-semibold">{item.period}</span>
                <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">
                  {item.industry}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-1">{item.role}</h3>
              <p className="text-gray-300 mb-4">{item.org}</p>
              
              <ul className="space-y-2 mb-4">
                {item.bullets.map((bullet: string, j: number) => (
                  <li key={j} className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {item.tech.map((tech: string, k: number) => (
                  <span 
                    key={k}
                    className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
