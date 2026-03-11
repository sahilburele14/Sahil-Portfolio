import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SplashProps {
  onComplete: () => void;
}

export const Splash: React.FC<SplashProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1500; // 1.5s
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 300); // slight delay before unmounting
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="relative flex items-center justify-center w-24 h-24 mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="absolute inset-0 rounded-full border-2 border-zinc-800" />
          <motion.div
            className="absolute inset-0 rounded-full border-t-2 border-emerald-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
          />
          <span className="text-3xl font-bold tracking-tighter text-white font-sans">
            SB
          </span>
        </motion.div>

        <div className="w-48 h-1 overflow-hidden rounded-full bg-zinc-800">
          <motion.div
            className="h-full bg-emerald-500"
            style={{ width: `${progress}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        
        <motion.div 
          className="mt-4 text-xs tracking-widest text-zinc-500 uppercase font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Initializing System
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
