import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import { resumeData } from '../data/resume';
import { cn } from '../lib/utils';

export const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-4 font-sans">
          <Briefcase className="w-8 h-8 text-emerald-500" />
          Experience
        </h2>

        <div className="space-y-6">
          {resumeData.experience.map((exp, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md overflow-hidden transition-colors",
                  isExpanded ? "border-emerald-500/30 bg-zinc-900/60" : "hover:border-zinc-700 hover:bg-zinc-900/50"
                )}
              >
                <div
                  className="p-6 sm:p-8 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  onClick={() => toggleExpand(index)}
                >
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white font-sans mb-1">{exp.role}</h3>
                    <div className="text-lg text-emerald-400 font-medium mb-3">{exp.company}</div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-zinc-400 font-mono">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {exp.dates}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-end sm:justify-center w-10 h-10 rounded-full bg-zinc-800/50 text-zinc-400">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-8 sm:px-8 pt-0">
                        <div className="h-px w-full bg-zinc-800 mb-6" />
                        <ul className="space-y-4">
                          {exp.bullets.map((bullet, i) => {
                            // Highlight metrics (numbers + % or +)
                            const highlightedBullet = bullet.replace(/(\d+%|\d+\+)/g, '<span class="text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">$1</span>');
                            
                            return (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-3 text-zinc-300 leading-relaxed font-sans"
                              >
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                <span dangerouslySetInnerHTML={{ __html: highlightedBullet }} />
                              </motion.li>
                            );
                          })}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
