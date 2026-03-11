import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'motion/react';
import { Trophy } from 'lucide-react';
import { resumeData } from '../data/resume';

const AnimatedCounter = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);
  
  const numValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numValue;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, numValue]);

  return (
    <span ref={ref} className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 font-sans">
      {count}{suffix}
    </span>
  );
};

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-white flex items-center gap-4 font-sans">
            <Trophy className="w-8 h-8 text-amber-400" />
            Top Impact
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-8 hidden sm:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resumeData.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-md overflow-hidden"
            >
              {/* Spotlight effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="mb-6">
                  <AnimatedCounter value={achievement.metric} />
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed font-sans group-hover:text-zinc-300 transition-colors">
                  {achievement.context}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
