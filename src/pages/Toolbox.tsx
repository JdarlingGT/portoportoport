import { motion } from 'framer-motion';
import { Zap, Shield, BarChart3, Settings } from 'lucide-react';
import toolboxData from "../data/toolbox.json";
import { slideUp, staggerContainer } from '../styles/animations';

const competencyIcons = [Zap, Shield, BarChart3, Settings];

export default function Toolbox() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Toolbox</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            The systems, strategies, and technologies I use to build marketing infrastructure that scales
          </p>
        </motion.div>

        {/* Core Competencies */}
        <motion.section 
          id="competencies"
          className="mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-3xl font-bold mb-12 text-center" variants={slideUp}>
            Core Competencies
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {toolboxData.competencies.map((competency, index) => {
              const IconComponent = competencyIcons[index];
              return (
                <motion.div 
                  key={competency.title}
                  className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                  variants={slideUp}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{competency.title}</h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed">{competency.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Technical Spotlights */}
        <motion.section 
          id="spotlights"
          className="mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-3xl font-bold mb-12 text-center" variants={slideUp}>
            Technical Spotlights
          </motion.h2>
          <div className="space-y-8">
            {toolboxData.spotlights.map((spotlight) => (
              <motion.div 
                key={spotlight.title}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                variants={slideUp}
              >
                <h3 className="text-xl font-bold mb-4">{spotlight.title}</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-red-400 mb-2 uppercase tracking-wide">Problem</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{spotlight.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-yellow-400 mb-2 uppercase tracking-wide">Action</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{spotlight.action}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-2 uppercase tracking-wide">Result</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{spotlight.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technology Stack */}
        <motion.section 
          id="stack"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-3xl font-bold mb-12 text-center" variants={slideUp}>
            Technology Stack
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(toolboxData.stack).map(([category, technologies]) => (
              <motion.div 
                key={category}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                variants={slideUp}
              >
                <h3 className="text-lg font-bold mb-4 text-cyan-400">{category}</h3>
                <ul className="space-y-3">
                  {technologies.map((tool: any, index: number) => (
                    <li key={index} className="text-slate-300 text-sm">
                      <div className="flex items-start space-x-3">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                        <div>
                          <div className="font-semibold text-white">{tool.name}</div>
                          <div className="text-xs text-slate-400 mt-1">{tool.why}</div>
                          {tool.link && (
                            <a 
                              href={tool.link} 
                              className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                            >
                              View Case Study →
                            </a>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
