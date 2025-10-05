import { motion } from 'framer-motion';

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProjectFilter({ categories, activeCategory, onCategoryChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-12">
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            activeCategory === category
              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
              : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10 hover:text-white'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}
