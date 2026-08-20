import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const posts = [
  {
    title: 'My AI Learning Journey',
    summary: 'A roadmap of the AI and ML topics I explore as I transition from theory to projects.',
  },
  {
    title: 'Machine Learning Concepts Explained',
    summary: 'Short technical posts that break down models, evaluation, and research ideas.',
  },
  {
    title: 'Building AI Projects',
    summary: 'Notes on project design, experimentation, and engineering practices for future work.',
  },
];

function Blog() {
  return (
    <section id="blog" className="py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="rounded-[32px] border border-slate-800/80 bg-slate-950/85 p-8 shadow-glass backdrop-blur-xl"
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-blue-300/80">Blog</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-100 sm:text-4xl">
              Notes and ideas for future technical writing.
            </h2>
            <p className="mt-4 max-w-2xl text-slate-400 leading-7">
              This section is prepared for future posts about your AI journey, ML concepts, and project development.
            </p>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-500/10 text-blue-300">
            <BookOpen size={24} />
          </div>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="rounded-3xl border border-slate-800/80 bg-slate-900/70 p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Future post</p>
              <h3 className="mt-4 text-xl font-semibold text-slate-100">{post.title}</h3>
              <p className="mt-3 text-slate-400 leading-7">{post.summary}</p>
              <button className="mt-6 inline-flex items-center rounded-full border border-slate-700 bg-slate-950/80 px-4 py-2 text-sm text-slate-100 hover:border-blue-500">
                Read later
              </button>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Blog;
