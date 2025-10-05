
import { motion } from 'framer-motion';
import { Download, FileText, Share2 } from 'lucide-react';
import { resumeMeta, highlights, summary, experience, education, skillGroups } from '../lib/resume-data';
import { slideUp, staggerContainer } from '../styles/animations';

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleTxtExport = () => {
    const txtContent = `
${resumeMeta.name}
${resumeMeta.title}
${resumeMeta.email} | ${resumeMeta.phone} | ${resumeMeta.location}
${resumeMeta.linkedin} | ${resumeMeta.github}

SUMMARY
${summary}

HIGHLIGHTS
${highlights.map(h => `• ${h}`).join('\n')}

EXPERIENCE
${experience.map(exp => `
${exp.role} | ${exp.org} | ${exp.period}
${exp.bullets.map(b => `• ${b}`).join('\n')}
${exp.tech ? `Technologies: ${exp.tech.join(', ')}` : ''}
`).join('\n')}

EDUCATION
${education.map(edu => `${edu.degree} | ${edu.org} | ${edu.period}`).join('\n')}

SKILLS
${skillGroups.map(group => `${group.label}: ${group.items.join(', ')}`).join('\n')}
    `.trim();

    const blob = new Blob([txtContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${resumeMeta.name.replace(' ', '_')}_Resume.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${resumeMeta.name} - Resume`,
          text: `Check out ${resumeMeta.name}'s resume`,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Resume URL copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      {/* Sticky Toolbar */}
      <div className="sticky top-20 z-40 bg-black/80 backdrop-blur-lg border-b border-white/10 print:hidden">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold">Resume</h1>
            <div className="flex items-center space-x-3">
              <button
                onClick={handlePrint}
                className="flex items-center space-x-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm"
              >
                <Download className="w-4 h-4" />
                <span>Print / PDF</span>
              </button>
              <button
                onClick={handleTxtExport}
                className="flex items-center space-x-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm"
              >
                <FileText className="w-4 h-4" />
                <span>TXT Export</span>
              </button>
              <button
                onClick={handleShare}
                className="flex items-center space-x-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Content */}
      <motion.div 
        className="max-w-4xl mx-auto px-6 py-12"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {/* Header */}
        <motion.header className="text-center mb-12 print:mb-8" variants={slideUp}>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 print:text-3xl">{resumeMeta.name}</h1>
          <h2 className="text-xl text-slate-300 mb-4 print:text-lg print:text-black">{resumeMeta.title}</h2>
          <div className="flex flex-wrap justify-center gap-4 text-slate-400 print:text-black print:text-sm">
            <span>{resumeMeta.email}</span>
            <span>•</span>
            <span>{resumeMeta.phone}</span>
            <span>•</span>
            <span>{resumeMeta.location}</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-2 text-slate-400 print:text-black print:text-sm">
            <a href={resumeMeta.linkedin} className="hover:text-cyan-400 transition-colors print:text-black">LinkedIn</a>
            <span>•</span>
            <a href={resumeMeta.github} className="hover:text-cyan-400 transition-colors print:text-black">GitHub</a>
            <span>•</span>
            <a href={resumeMeta.site} className="hover:text-cyan-400 transition-colors print:text-black">Portfolio</a>
          </div>
        </motion.header>

        {/* Summary */}
        <motion.section className="mb-8 print:mb-6" variants={slideUp}>
          <h3 className="text-xl font-bold mb-3 print:text-lg">Summary</h3>
          <p className="text-slate-300 leading-relaxed print:text-black">{summary}</p>
        </motion.section>

        {/* Highlights */}
        <motion.section className="mb-8 print:mb-6" variants={slideUp}>
          <h3 className="text-xl font-bold mb-3 print:text-lg">Key Achievements</h3>
          <ul className="space-y-2">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0 print:bg-black"></span>
                <span className="text-slate-300 print:text-black">{highlight}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Experience */}
        <motion.section className="mb-8 print:mb-6" variants={slideUp}>
          <h3 className="text-xl font-bold mb-4 print:text-lg">Professional Experience</h3>
          <div className="space-y-6 print:space-y-4">
            {experience.map((exp, index) => (
              <div key={index} className="border-l-2 border-cyan-500/30 pl-6 print:border-black">
                <div className="mb-2">
                  <h4 className="text-lg font-semibold print:text-base">{exp.role}</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-slate-300 print:text-black">
                    <span className="font-medium">{exp.org}</span>
                    <span className="text-slate-400 print:text-gray-600">{exp.period}</span>
                  </div>
                </div>
                <ul className="space-y-1 mb-3">
                  {exp.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start space-x-2 text-slate-300 print:text-black">
                      <span className="w-1 h-1 bg-slate-400 rounded-full mt-2 flex-shrink-0 print:bg-black"></span>
                      <span className="text-sm">{bullet}</span>
                    </li>
                  ))}
                </ul>
                {exp.tech && (
                  <div className="text-xs text-slate-400 print:text-gray-600">
                    <strong>Technologies:</strong> {exp.tech.join(', ')}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section className="mb-8 print:mb-6" variants={slideUp}>
          <h3 className="text-xl font-bold mb-3 print:text-lg">Education</h3>
          {education.map((edu, index) => (
            <div key={index} className="mb-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                <span className="font-medium text-slate-300 print:text-black">{edu.degree}</span>
                <span className="text-slate-400 print:text-gray-600">{edu.org} • {edu.period}</span>
              </div>
            </div>
          ))}
        </motion.section>

        {/* Skills */}
        <motion.section variants={slideUp}>
          <h3 className="text-xl font-bold mb-4 print:text-lg">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-4 print:grid-cols-1">
            {skillGroups.map((group, index) => (
              <div key={index} className="mb-3">
                <h4 className="font-semibold text-cyan-400 mb-2 print:text-black">{group.label}</h4>
                <p className="text-slate-300 text-sm print:text-black">{group.items.join(', ')}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Resume;
