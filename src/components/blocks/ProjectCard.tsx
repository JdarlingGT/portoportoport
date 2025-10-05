import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Bot, Calendar, CreditCard, BarChart3, Target, Workflow, 
  Shield, Image, GitBranch, Clock, ArrowRight 
} from 'lucide-react';

const iconMap = {
  Bot, Calendar, CreditCard, BarChart3, Target, Workflow,
  Shield, Image, GitBranch
};

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    tagline: string;
    category: string;
    icon: string;
    technologies: string[];
    timeline: string;
    impact: string;
    color: string;
    borderColor: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const IconComponent = iconMap[project.icon as keyof typeof iconMap] || Bot;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-2xl border ${project.borderColor} bg-gradient-to-br ${project.color} backdrop-blur-sm hover:scale-[1.02] transition-all duration-300`}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm">
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wide">
                {project.category}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Clock className="w-3 h-3" />
            {project.timeline}
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          {project.tagline}
        </p>

        {/* Impact */}
        <div className="mb-4 p-3 bg-black/20 rounded-lg border border-white/10">
          <div className="text-xs font-semibold text-cyan-400 mb-1">Impact</div>
          <div className="text-sm font-bold text-white">{project.impact}</div>
        </div>

        {/* Technologies */}
        <div className="mb-4">
          <div className="text-xs font-semibold text-slate-400 mb-2">Technologies</div>
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 bg-white/10 rounded-full text-slate-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs px-2 py-1 bg-white/10 rounded-full text-slate-300">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* CTA */}
        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
        >
          <span>View Details</span>
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
}
