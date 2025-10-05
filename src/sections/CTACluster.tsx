import { motion } from "framer-motion";

export default function CTACluster() {
  const stats = [
    "8+ Years",
    "150+ Projects Delivered", 
    "200+ Team Members Trained",
    "95% Client Satisfaction"
  ];

  return (
    <div className="text-center space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-white">Ready to Collaborate?</h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="/contact"
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition-colors"
          >
            Ready to Collaborate?
          </a>
          <a 
            href="/resume"
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors"
          >
            Download Résumé
          </a>
          <a 
            href="/case-studies"
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors"
          >
            View Projects
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-6 pt-8 border-t border-white/10"
      >
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-sm text-gray-400">{stat}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
