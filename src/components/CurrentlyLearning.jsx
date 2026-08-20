import { motion } from 'framer-motion';
import { Brain, Cpu, BarChart2, Sparkles, Code2 } from 'lucide-react';

const learningItems = [
  {
    title: 'Machine Learning',
    icon: <Brain size={22} className="text-sky-400" />,
    description: 'Mastering supervised and unsupervised learning algorithms, hyperparameter tuning, and evaluation metrics.',
  },
  {
    title: 'Scikit-learn',
    icon: <Cpu size={22} className="text-indigo-400" />,
    description: 'Building end-to-end predictive pipelines, data preprocessing, feature selection, and model training.',
  },
  {
    title: 'Data Science',
    icon: <BarChart2 size={22} className="text-emerald-400" />,
    description: 'Performing exploratory data analysis (EDA), data cleaning, statistical modeling, and data-driven insights.',
  },
  {
    title: 'AI Applications',
    icon: <Sparkles size={22} className="text-amber-400" />,
    description: 'Exploring practical ways to integrate intelligent models into practical, real-world software solutions.',
  },
  {
    title: 'Software Engineering',
    icon: <Code2 size={22} className="text-pink-400" />,
    description: 'Strengthening clean code practices, object-oriented principles, version control, and modular architecture.',
  },
];

function CurrentlyLearning() {
  return (
    <section id="learning" className="py-16 lg:py-24">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-sky-400">// 03. Active Focus</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            Currently Learning
          </h2>
          <p className="mt-3 text-slate-400 leading-7">
            Key focus areas I am actively studying and developing to strengthen my engineering foundation.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {learningItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                y: -6,
                borderColor: 'rgba(56, 189, 248, 0.4)',
                boxShadow: '0 12px 30px -10px rgba(56, 189, 248, 0.2)',
              }}
              className="group rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 backdrop-blur-xl transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mt-6 -mr-6 h-20 w-20 rounded-full bg-sky-500/10 blur-xl group-hover:bg-sky-500/20 transition-all duration-500" />
              
              <motion.div
                whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800/80 border border-slate-700/50 shadow-inner"
              >
                {item.icon}
              </motion.div>
              
              <h3 className="mt-4 text-xl font-semibold text-slate-100 group-hover:text-sky-300 transition-colors">
                {item.title}
              </h3>
              
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CurrentlyLearning;
