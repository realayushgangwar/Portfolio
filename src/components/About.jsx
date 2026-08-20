import { motion } from 'framer-motion';
import { Lightbulb, Target, Cpu, Compass, BookOpen, Rocket, Wrench } from 'lucide-react';

const personalityAspects = [
  {
    icon: <Lightbulb size={20} className="text-amber-400" />,
    title: 'Curious & Inquisitive',
    description: 'Driven by a natural desire to explore new technologies and understand how systems work under the hood.',
  },
  {
    icon: <Wrench size={20} className="text-sky-400" />,
    title: 'Practical Problem Solver',
    description: 'Approaching real-world problems with a logical engineering mindset and practical code implementation.',
  },
  {
    icon: <Cpu size={20} className="text-indigo-400" />,
    title: 'Smart & Self-Driven',
    description: 'Consistently studying modern AI concepts, machine learning algorithms, and clean software architecture.',
  },
  {
    icon: <Compass size={20} className="text-emerald-400" />,
    title: 'Creative & Practical Thinker',
    description: 'Combining analytical rigor with creative approaches to transform raw ideas into functional projects.',
  },
  {
    icon: <BookOpen size={20} className="text-pink-400" />,
    title: 'Continuous Learner',
    description: 'Actively expanding technical capabilities through hands-on coursework, personal builds, and research.',
  },
];

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-sky-400">// 01. Background</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            About Me
          </h2>
          <p className="mt-3 text-slate-400 leading-7">
            A student engineer actively building skills to solve real-world problems through artificial intelligence and software logic.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl shadow-xl"
        >
          <div className="space-y-6 text-slate-300 leading-relaxed text-base">
            <p>
              I am a curious and problem-solving-oriented Computer Science student specializing in AI/ML at GLA University, Mathura (Graduation: 2029). I enjoy learning new technologies, understanding how things work, and turning ideas into practical projects. I am currently strengthening my skills in machine learning, data analysis, software development, and real-world AI applications.
            </p>

            <motion.div
              whileHover={{ scale: 1.01, borderColor: 'rgba(99, 102, 241, 0.5)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="rounded-2xl border border-indigo-500/30 bg-indigo-500/10 p-6 text-indigo-200 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-indigo-500/10 blur-xl group-hover:bg-indigo-500/20 transition-all duration-500" />
              <div className="flex items-center gap-3 font-semibold text-lg text-indigo-300 mb-2">
                <Target size={20} className="animate-pulse" />
                Career Direction & Goal
              </div>
              <p className="text-sm leading-relaxed text-indigo-100/90 relative z-10">
                My goal is to become an AI/ML engineer and gain real-world experience through internships, research, collaborative projects, and practical problem solving.
              </p>
            </motion.div>
          </div>

          <div className="mt-8 border-t border-slate-800 pt-8">
            <h3 className="text-lg font-semibold text-slate-100 mb-6">
              Engineering Mindset & Personality
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {personalityAspects.map((aspect) => (
                <motion.div
                  key={aspect.title}
                  variants={cardVariants}
                  whileHover={{ y: -5, borderColor: 'rgba(56, 189, 248, 0.4)', backgroundColor: 'rgba(15, 23, 42, 0.9)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5 transition-colors cursor-default"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 mb-3 shadow-md"
                  >
                    {aspect.icon}
                  </motion.div>
                  <h4 className="font-semibold text-slate-200 text-base mb-1">{aspect.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{aspect.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
