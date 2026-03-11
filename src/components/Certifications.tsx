import React from 'react';
import { motion } from 'motion/react';
import { Award } from 'lucide-react';
import { resumeData } from '../data/resume';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 px-6 max-w-5xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-4 font-sans">
          <Award className="w-8 h-8 text-pink-400" />
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {resumeData.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-md overflow-hidden flex items-center gap-4"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center shrink-0 border border-pink-500/20 group-hover:bg-pink-500/20 transition-colors">
                <Award className="w-6 h-6 text-pink-400" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-zinc-300 font-medium leading-snug group-hover:text-white transition-colors">
                  {cert}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
