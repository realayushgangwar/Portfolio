import { motion } from 'framer-motion';
import { Github, ExternalLink, CheckCircle2, Clock } from 'lucide-react';

const projectData = [
  {
    status: 'Completed',
    statusBadge: 'Completed Project',
    isCompleted: true,
    title: 'Sales Dashboard',
    description:
      'A data analytics and visualization project that converts sales data into meaningful insights through an interactive dashboard. Designed to analyze key metrics and business trends.',
    tech: ['Python', 'Data Analytics', 'Data Visualization', 'SQL'],
    githubUrl: 'https://github.com/realayushgangwar/Sales_Dashboard',
  },
  {
    status: 'In Development',
    statusBadge: 'Concept / In Development',
    isCompleted: false,
    title: 'Computer Vision & AI Application',
    description:
      'An exploration into computer vision algorithms and image recognition workflows to analyze visual data and build practical real-world AI prototypes.',
    tech: ['Python', 'Computer Vision', 'AI/ML concepts'],
    githubUrl: 'https://github.com/realayushgangwar',
  },
  {
    status: 'In Development',
    statusBadge: 'Concept / In Development',
    isCompleted: false,
    title: 'ML Predictive Models',
    description:
      'Experimenting with Scikit-learn algorithms to train, evaluate, and compare baseline classification and regression models on structured datasets.',
    tech: ['Python', 'Scikit-learn', 'NumPy', 'Matplotlib'],
    githubUrl: 'https://github.com/realayushgangwar',
  },
];

function Projects() {
  return (
    <section id="projects" className="py-16 lg:py-24">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-sky-400">// 04. Practical Work</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-3 text-slate-400 leading-7">
            Highlighting completed data analytics builds alongside ongoing machine learning concepts and research prototypes.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projectData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                y: -8,
                borderColor: project.isCompleted ? 'rgba(16, 185, 129, 0.5)' : 'rgba(56, 189, 248, 0.4)',
                boxShadow: project.isCompleted
                  ? '0 15px 30px -10px rgba(16, 185, 129, 0.15)'
                  : '0 15px 30px -10px rgba(56, 189, 248, 0.15)',
              }}
              className={`group flex flex-col justify-between rounded-3xl border p-6 backdrop-blur-xl transition-all duration-300 relative overflow-hidden ${
                project.isCompleted
                  ? 'border-emerald-500/30 bg-slate-900/80'
                  : 'border-slate-800 bg-slate-900/50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] font-medium ${
                      project.isCompleted
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm shadow-emerald-500/10'
                        : 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                    }`}
                  >
                    {project.isCompleted ? <CheckCircle2 size={12} className="animate-pulse" /> : <Clock size={12} />}
                    {project.statusBadge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <motion.span
                      key={t}
                      whileHover={{ scale: 1.05, borderColor: 'rgba(56, 189, 248, 0.4)' }}
                      className="rounded-md border border-slate-800 bg-slate-950/80 px-2.5 py-1 font-mono text-[11px] text-slate-300 transition-colors cursor-default"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-slate-800/80 pt-4">
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 3 }}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 transition hover:text-sky-300"
                >
                  <Github size={15} />
                  {project.isCompleted ? 'View GitHub Repository' : 'Explore GitHub Profile'}
                  <ExternalLink size={13} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
