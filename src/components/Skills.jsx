import { motion } from 'framer-motion';
import { Code2, Brain, BarChart3, Database } from 'lucide-react';

const skillCategories = [
  {
    category: 'Languages & Foundations',
    icon: <Code2 size={20} className="text-sky-400" />,
    skills: ['Python', 'Basic Java', 'JavaScript', 'HTML', 'CSS', 'SQL', 'DBMS'],
  },
  {
    category: 'Artificial Intelligence & ML',
    icon: <Brain size={20} className="text-indigo-400" />,
    skills: [
      'Machine Learning',
      'Scikit-learn',
      'AI/ML concepts',
      'Reinforcement Learning fundamentals',
    ],
  },
  {
    category: 'Data Analysis & Visualization',
    icon: <BarChart3 size={20} className="text-emerald-400" />,
    skills: ['Data Analysis', 'Data Visualization', 'NumPy', 'Matplotlib'],
  },
  {
    category: 'Developer Tools & Platform',
    icon: <Database size={20} className="text-amber-400" />,
    skills: ['Git', 'GitHub', 'Supabase', 'DBMS'],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-16 lg:py-24">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-sky-400">// 02. Capabilities</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            Skills & Technologies
          </h2>
          <p className="mt-3 text-slate-400 leading-7">
            Structured into clear technical domains to represent software engineering fundamentals, AI concepts, and data analytics tools.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, borderColor: 'rgba(56, 189, 248, 0.3)' }}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800/90 border border-slate-700 shadow-md"
                >
                  {group.icon}
                </motion.div>
                <h3 className="text-lg font-semibold text-slate-100">{group.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + sIdx * 0.03 }}
                    whileHover={{
                      scale: 1.08,
                      y: -3,
                      borderColor: 'rgba(56, 189, 248, 0.5)',
                      boxShadow: '0 4px 12px rgba(56, 189, 248, 0.15)',
                    }}
                    className="rounded-xl border border-slate-800 bg-slate-950/80 px-3.5 py-2 text-xs font-medium text-slate-300 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
