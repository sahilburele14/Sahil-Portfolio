import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { resumeData } from '../data/resume';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 max-w-5xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-4 font-sans">
          <GraduationCap className="w-8 h-8 text-blue-400" />
          Education
        </h2>

        <div className="space-y-8">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-md overflow-hidden group hover:border-zinc-700 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white font-sans mb-2">{edu.institution}</h3>
                <div className="text-lg text-blue-400 font-medium mb-4">{edu.degree}</div>
                
                <div className="flex flex-wrap gap-4 text-sm text-zinc-400 font-mono mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {edu.dates}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {edu.location}
                  </div>
                </div>

                <div className="inline-block px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-semibold">
                  {edu.score}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
