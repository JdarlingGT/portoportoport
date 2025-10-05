import { motion } from 'framer-motion';
import { slideUp, staggerContainer } from '../styles/animations';

interface HighlightChipsProps {
  chips: string[];
  className?: string;
}

export default function HighlightChips({ chips, className = "" }: HighlightChipsProps) {
  return (
    <motion.div 
      className={`flex flex-wrap gap-3 justify-center ${className}`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {chips.map((chip, index) => (
        <motion.span 
          key={index}
          variants={slideUp}
          className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 rounded-full text-sm font-semibold text-cyan-300 backdrop-blur-sm"
        >
          {chip}
        </motion.span>
      ))}
    </motion.div>
  );
}
