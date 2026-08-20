import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Sparkles, GraduationCap, MapPin, User, X } from 'lucide-react';

const personalityTraits = [
  'Curious',
  'Problem solver',
  'Smart worker',
  'Self-driven',
  'Creative',
  'Continuous learner',
  'Practical thinker',
];

function Hero() {
  const [showPfpModal, setShowPfpModal] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="hero" className="py-12 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
        {/* Left Column - Hero Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6 lg:col-span-7 w-full"
        >
          {/* Header Row: PFP Avatar + Name + Role */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-5 w-full">
            <motion.button
              onClick={() => setShowPfpModal(true)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -4, 0] }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="group relative flex-shrink-0 cursor-pointer focus:outline-none"
              title="Click to view Ayush's PFP"
            >
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 opacity-60 blur-md group-hover:opacity-100 transition duration-500 animate-pulse" />
              <img
                src="/ayush_pfp.jpg"
                alt="Ayush Gangwar Profile Picture"
                className="relative h-24 w-24 rounded-full object-cover border-4 border-sky-400 shadow-lg shadow-sky-500/30 transition-transform duration-300"
                onError={(e) => {
                  e.target.src = 'ayush_pfp.jpg';
                }}
              />
              <span className="absolute -bottom-1 -right-1 rounded-full bg-sky-500 px-2 py-0.5 font-mono text-[10px] font-bold text-slate-950 border-2 border-slate-950 shadow-md">
                PFP
              </span>
            </motion.button>

            <div className="flex flex-col gap-1">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-400 w-fit backdrop-blur-md"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                GLA University, Mathura • Class of 2029
              </motion.div>

              <h1 className="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl">
                Ayush Gangwar
              </h1>

              <p className="text-lg font-semibold text-sky-400 sm:text-xl">
                AI/ML-focused CSE Student
              </p>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.div
            variants={itemVariants}
            className="border-l-4 border-sky-500 pl-4 italic text-slate-200 text-lg w-full bg-gradient-to-r from-sky-500/10 to-transparent py-1 rounded-r-lg"
          >
            "Building intelligent solutions for real-world problems."
          </motion.div>

          {/* Bio */}
          <motion.p variants={itemVariants} className="text-base text-slate-400 leading-relaxed max-w-xl w-full">
            I am a curious and problem-solving-oriented Computer Science student specializing in AI/ML. I enjoy learning new technologies, understanding how things work, and turning ideas into practical projects. Currently strengthening my skills in machine learning, data analysis, and software development.
          </motion.p>

          {/* Action Buttons Row */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-2 w-full">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, x: 2, boxShadow: '0 10px 25px -5px rgba(56, 189, 248, 0.4)' }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/25 transition whitespace-nowrap"
            >
              View Projects
              <ArrowRight size={16} />
            </motion.a>

            <motion.a
              href="https://github.com/realayushgangwar"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-sky-500 hover:text-sky-300 whitespace-nowrap backdrop-blur-md"
            >
              <Github size={18} />
              GitHub
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/realayushgangwar"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-sky-500 hover:text-sky-300 whitespace-nowrap backdrop-blur-md"
            >
              <Linkedin size={18} />
              LinkedIn
            </motion.a>

            <motion.button
              onClick={() => setShowPfpModal(true)}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 rounded-xl border border-indigo-500/40 bg-indigo-500/10 px-4 py-3 text-sm font-semibold text-indigo-300 transition hover:bg-indigo-500/20 hover:text-indigo-200 whitespace-nowrap backdrop-blur-md"
            >
              <User size={18} />
              View PFP
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Column - Profile Metadata Card */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 w-full"
        >
          <motion.div
            whileHover={{ y: -6, borderColor: 'rgba(56, 189, 248, 0.4)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="relative rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl backdrop-blur-xl transition-colors duration-300"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <span className="font-mono text-xs text-slate-400 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-ping" />
                // STUDENT_PROFILE.json
              </span>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 font-mono text-[11px] text-emerald-400 border border-emerald-500/20 shadow-sm shadow-emerald-500/10">
                Active Learner
              </span>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-2">
                  <GraduationCap size={16} className="text-sky-400" />
                  College
                </span>
                <span className="font-medium text-slate-200">GLA University, Mathura</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-2">
                  <Sparkles size={16} className="text-indigo-400" />
                  Degree
                </span>
                <span className="font-medium text-slate-200">B.Tech CSE (AI/ML)</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-2">
                  <MapPin size={16} className="text-emerald-400" />
                  Graduation Year
                </span>
                <span className="font-medium text-slate-200">2029</span>
              </div>
            </div>

            <div className="mt-6 border-t border-slate-800 pt-5">
              <p className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-3">Personality & Mindset</p>
              <div className="flex flex-wrap gap-2">
                {personalityTraits.map((trait, idx) => (
                  <motion.span
                    key={trait}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + idx * 0.05 }}
                    whileHover={{ scale: 1.08, y: -2, backgroundColor: 'rgba(56, 189, 248, 0.2)' }}
                    className="rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs text-sky-300 transition-colors cursor-default"
                  >
                    {trait}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* PFP Modal */}
      <AnimatePresence>
        {showPfpModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4"
            onClick={() => setShowPfpModal(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm rounded-3xl border border-sky-500/30 bg-slate-900 p-6 text-center shadow-2xl"
            >
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowPfpModal(false)}
                className="absolute top-4 right-4 rounded-full bg-slate-800 p-2 text-slate-400 hover:text-slate-100"
              >
                <X size={18} />
              </motion.button>

              <h3 className="text-lg font-bold text-slate-100 mt-2">Ayush Gangwar</h3>
              <p className="text-xs text-sky-400">AI/ML CSE Student • GLA University</p>

              <div className="relative mx-auto my-4 w-60 h-60">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 opacity-50 blur-lg animate-pulse" />
                <img
                  src="/ayush_pfp.jpg"
                  alt="Ayush Gangwar PFP Large"
                  className="relative mx-auto h-60 w-60 rounded-full object-cover border-4 border-sky-400 shadow-xl shadow-sky-500/30"
                  onError={(e) => {
                    e.target.src = 'ayush_pfp.jpg';
                  }}
                />
              </div>

              <p className="text-xs text-slate-400 italic">"Building intelligent solutions for real-world problems."</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Hero;
