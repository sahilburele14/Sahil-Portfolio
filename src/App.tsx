/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Splash } from './components/Splash';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { ResumeViewer } from './components/ResumeViewer';
import { FileText, Menu, X } from 'lucide-react';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'experience', 'achievements', 'projects', 'skills', 'education', 'certifications'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Impact' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
  ];

  if (showSplash) {
    return <Splash onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="relative min-h-screen text-zinc-50 font-sans selection:bg-emerald-500/30">
      <AnimatedBackground />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4 transition-all duration-300 bg-zinc-950/50 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold tracking-tighter text-white"
          >
            SB.
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id ? 'text-emerald-400' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => setIsResumeOpen(true)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-zinc-200 transition-colors"
            >
              <FileText className="w-4 h-4" />
              Resume
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 pt-24 px-6 bg-zinc-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-2xl font-bold text-left transition-colors ${
                    activeSection === item.id ? 'text-emerald-400' : 'text-zinc-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="h-px bg-zinc-800 my-4" />
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsResumeOpen(true);
                }}
                className="flex items-center justify-center gap-2 px-6 py-4 text-lg font-bold text-black bg-white rounded-2xl"
              >
                <FileText className="w-5 h-5" />
                View Full Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="relative z-10 pt-16">
        <Hero />
        <Achievements />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-12 text-center border-t border-white/5 bg-zinc-950/50 backdrop-blur-md">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Sahil P. Burele. All rights reserved.
        </p>
      </footer>

      {/* Resume Modal */}
      {isResumeOpen && (
        <ResumeViewer isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      )}
    </div>
  );
}

