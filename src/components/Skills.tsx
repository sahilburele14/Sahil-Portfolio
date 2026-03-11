import React from 'react';
import { motion } from 'motion/react';
import { Code2 } from 'lucide-react';
import { resumeData } from '../data/resume';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-4 font-sans">
          <Code2 className="w-8 h-8 text-violet-400" />
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-md overflow-hidden flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-xl font-bold text-white font-sans mb-6">{skillGroup.category}</h3>

                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-300 text-sm font-medium border border-zinc-700 hover:border-violet-500/50 hover:bg-violet-500/10 transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
