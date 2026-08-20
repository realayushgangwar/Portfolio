import { motion } from 'framer-motion';

const interests = [
  {
    emoji: '🥋',
    title: 'Martial Arts & Fitness',
    description: 'Instilling discipline, stamina, mental focus, and long-term physical persistence.',
  },
  {
    emoji: '⛩️',
    title: 'Anime & Manga/Manhwa',
    description: 'Appreciating creative storytelling, rich character arcs, and imaginative world-building.',
  },
  {
    emoji: '🎵',
    title: 'Music & Flute',
    description: 'Playing the flute as a mindful, calming creative outlet that sharpens concentration.',
  },
  {
    emoji: '🏎️',
    title: 'Cars & Bikes',
    description: 'Fascinated by mechanical engineering, aerodynamics, automotive design, and performance.',
  },
];

function BeyondCode() {
  return (
    <section id="beyond" className="py-16 lg:py-24">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-sky-400">// 05. Beyond Coding</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            Beyond Code
          </h2>
          <p className="mt-3 text-slate-400 leading-7">
            Interests and activities that keep me disciplined, creative, and focused outside software engineering.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {interests.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                y: -6,
                borderColor: 'rgba(99, 102, 241, 0.5)',
                boxShadow: '0 12px 30px -10px rgba(99, 102, 241, 0.2)',
              }}
              className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl transition-colors duration-300 relative overflow-hidden"
            >
              <motion.div
                whileHover={{ scale: 1.3, rotate: [0, -12, 12, -6, 0] }}
                transition={{ type: 'spring', stiffness: 400, damping: 12 }}
                className="text-4xl mb-3 inline-block cursor-default select-none"
              >
                {item.emoji}
              </motion.div>
              
              <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-indigo-300 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BeyondCode;
