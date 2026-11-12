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
    liveUrl: 'https://sales-dashboard-1-f32l.onrender.com/',
  },
  {
    status: 'Completed',
    statusBadge: 'Completed Project',
    isCompleted: true,
    title: 'AI Voice Detector 1',
    description:
      'An AI audio classification application featuring a Python backend and web UI to detect synthetic and deepfake voice patterns versus authentic human speech.',
    tech: ['Python', 'Machine Learning', 'Audio Analytics', 'JavaScript', 'HTML/CSS'],
    githubUrl: 'https://github.com/realayushgangwar/AI-Voice-Detector-1',
  },
  {
    status: 'Completed',
    statusBadge: 'Completed Project',
    isCompleted: true,
    title: 'AI Voice Detector 2',
    description:
      'An enhanced web application interface and feature-extraction workflow for real-time AI voice detection, audio processing, and confidence scoring.',
    tech: ['JavaScript', 'HTML/CSS', 'Machine Learning', 'Web Audio API'],
    githubUrl: 'https://github.com/realayushgangwar/AI-Voice-Detector-2',
  },
  {
    status: 'Completed',
    statusBadge: 'Completed Project',
    isCompleted: true,
    title: 'ML & Data Science Bootcamp',
    description:
      'Comprehensive Data Science & Machine Learning repository containing hands-on Jupyter notebooks, exploratory data analysis (EDA), and predictive modeling algorithms.',
    tech: ['Python', 'Jupyter Notebook', 'Pandas', 'NumPy', 'Scikit-Learn'],
    githubUrl: 'https://github.com/realayushgangwar/Bootcamp',
  },
  {
    status: 'Completed',
    statusBadge: 'Completed Project',
    isCompleted: true,
    title: 'Developer Portfolio Website',
    description:
      'A modern personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion, featuring dynamic canvas particle effects and dark glassmorphic UI.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'JavaScript'],
    githubUrl: 'https://github.com/realayushgangwar/Portfolio',
    liveUrl: 'https://portfolio-nexus-8f65.vercel.app',
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
            Projects & Open Source Repositories
          </h2>
          <p className="mt-3 text-slate-400 leading-7">
            Highlighting my open-source projects, machine learning models, data analytics dashboards, and web applications from GitHub.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800/80 pt-4">
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 3 }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 transition hover:text-sky-300"
                >
                  <Github size={15} />
                  View GitHub Repo
                  <ExternalLink size={13} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </motion.a>
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 transition hover:bg-emerald-500/20 hover:text-emerald-300"
                  >
                    <ExternalLink size={12} />
                    Live Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
