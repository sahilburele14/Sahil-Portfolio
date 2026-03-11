import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { resumeData } from '../data/resume';

export const Hero: React.FC = () => {
  const { name, title, summary, links, email } = resumeData.basics;

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen px-6 py-24 overflow-hidden text-center">
      <motion.div
        initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="z-10 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-flex items-center px-3 py-1 mb-8 text-sm font-medium border rounded-full text-emerald-400 border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm"
        >
          <span className="w-2 h-2 mr-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for Opportunities
        </motion.div>

        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl lg:text-8xl bg-clip-text bg-gradient-to-b from-white to-zinc-500 font-sans">
          {name}
        </h1>
        
        <h2 className="mb-8 text-2xl font-light tracking-wide text-zinc-300 sm:text-3xl lg:text-4xl font-sans">
          {title}
        </h2>

        <p className="max-w-2xl mx-auto mb-12 text-lg leading-relaxed text-zinc-400 sm:text-xl font-sans">
          {summary}
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScroll('experience')}
            className="flex items-center justify-center w-full px-8 py-4 text-sm font-semibold text-black transition-colors rounded-full sm:w-auto bg-white hover:bg-zinc-200"
          >
            View Experience
            <ArrowDown className="w-4 h-4 ml-2" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScroll('resume')}
            className="flex items-center justify-center w-full px-8 py-4 text-sm font-semibold transition-colors border rounded-full sm:w-auto text-white border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 backdrop-blur-sm"
          >
            <FileText className="w-4 h-4 mr-2" />
            Download Resume
          </motion.button>
        </div>

        <div className="flex items-center justify-center gap-6 mt-16">
          <a href={`https://${links.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href={`https://${links.github}`} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href={`mailto:${email}`} className="text-zinc-500 hover:text-white transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};
