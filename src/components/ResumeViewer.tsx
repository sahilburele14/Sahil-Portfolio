import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Printer } from 'lucide-react';
import { resumeData } from '../data/resume';

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeViewer: React.FC<ResumeViewerProps> = ({ isOpen, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-full overflow-hidden bg-white rounded-2xl shadow-2xl flex flex-col"
          >
            {/* Header Actions */}
            <div className="flex items-center justify-between p-4 border-b border-zinc-200 bg-zinc-50 shrink-0">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-700 bg-white border border-zinc-300 rounded-lg hover:bg-zinc-100 transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  Print
                </button>
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Resume Content (Printable Area) */}
            <div className="flex-1 overflow-y-auto p-8 sm:p-12 bg-white text-black font-sans print:p-0 print:overflow-visible">
              <div className="max-w-3xl mx-auto">
                {/* Header */}
                <header className="text-center mb-8 border-b-2 border-black pb-6">
                  <h1 className="text-4xl font-bold uppercase tracking-wider mb-2">{resumeData.basics.name}</h1>
                  <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-zinc-600">
                    <span>{resumeData.basics.phone}</span>
                    <span>|</span>
                    <span>{resumeData.basics.email}</span>
                    <span>|</span>
                    <span>{resumeData.basics.links.linkedin}</span>
                    <span>|</span>
                    <span>{resumeData.basics.links.github}</span>
                  </div>
                  <div className="text-sm text-zinc-600 mt-1">{resumeData.basics.location}</div>
                </header>

                {/* Summary */}
                <section className="mb-6">
                  <h2 className="text-lg font-bold uppercase tracking-wider border-b border-zinc-300 mb-3 pb-1">Professional Summary</h2>
                  <p className="text-sm leading-relaxed text-zinc-800">{resumeData.basics.summary}</p>
                </section>

                {/* Skills */}
                <section className="mb-6">
                  <h2 className="text-lg font-bold uppercase tracking-wider border-b border-zinc-300 mb-3 pb-1">Technical Skills</h2>
                  <div className="space-y-1.5">
                    {resumeData.skills.map((skillGroup, index) => (
                      <div key={index} className="text-sm">
                        <span className="font-bold">{skillGroup.category}:</span> {skillGroup.items.join(', ')}
                      </div>
                    ))}
                  </div>
                </section>

                {/* Experience */}
                <section className="mb-6">
                  <h2 className="text-lg font-bold uppercase tracking-wider border-b border-zinc-300 mb-3 pb-1">Professional Experience</h2>
                  <div className="space-y-5">
                    {resumeData.experience.map((exp, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-baseline mb-1">
                          <h3 className="font-bold text-base">{exp.company}</h3>
                          <span className="text-sm italic">{exp.location}</span>
                        </div>
                        <div className="flex justify-between items-baseline mb-2">
                          <div className="italic text-sm">{exp.role}</div>
                          <span className="text-sm italic">{exp.dates}</span>
                        </div>
                        <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-zinc-800">
                          {exp.bullets.map((bullet, i) => (
                            <li key={i} className="pl-1 leading-snug">{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Projects */}
                <section className="mb-6">
                  <h2 className="text-lg font-bold uppercase tracking-wider border-b border-zinc-300 mb-3 pb-1">Projects</h2>
                  <div className="space-y-5">
                    {resumeData.projects.map((project, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-baseline mb-2">
                          <div className="font-bold text-base">
                            {project.title} <span className="font-normal italic text-zinc-600">| {project.stack}</span>
                          </div>
                          <span className="text-sm italic">{project.dates}</span>
                        </div>
                        <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-zinc-800">
                          {project.bullets.map((bullet, i) => (
                            <li key={i} className="pl-1 leading-snug">{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Education */}
                <section className="mb-6">
                  <h2 className="text-lg font-bold uppercase tracking-wider border-b border-zinc-300 mb-3 pb-1">Education</h2>
                  <div className="space-y-4">
                    {resumeData.education.map((edu, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-baseline mb-1">
                          <h3 className="font-bold text-base">{edu.institution}</h3>
                          <span className="text-sm italic">{edu.location}</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <div className="italic text-sm">{edu.degree} — {edu.score}</div>
                          <span className="text-sm italic">{edu.dates}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Certifications */}
                <section>
                  <h2 className="text-lg font-bold uppercase tracking-wider border-b border-zinc-300 mb-3 pb-1">Certifications</h2>
                  <ul className="list-none space-y-1 text-sm text-zinc-800">
                    {resumeData.certifications.map((cert, index) => (
                      <li key={index} className="font-medium">{cert}</li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
