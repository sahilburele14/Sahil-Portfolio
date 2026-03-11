import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { resumeData } from '../data/resume';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-4 font-sans">
          <FolderGit2 className="w-8 h-8 text-cyan-400" />
          Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-md overflow-hidden flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-white font-sans">{project.title}</h3>
                  {project.links?.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-zinc-800/50 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <div className="text-sm font-mono text-cyan-400 mb-6 flex flex-wrap gap-2">
                  {project.stack.split(', ').map((tech, i) => (
                    <span key={i} className="px-2 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed font-sans">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="text-xs font-mono text-zinc-500 mt-auto pt-4 border-t border-zinc-800">
                  {project.dates}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
