import { motion } from 'framer-motion';
import { ArrowRight, LayoutDashboard, Sparkles } from 'lucide-react';

function Showcase() {
  return (
    <section className="py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-[40px] border border-slate-800/80 bg-slate-950/90 p-8 shadow-glass backdrop-blur-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/70 via-slate-950/50 to-transparent opacity-80" />
        <div className="relative flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.5em] text-slate-500/90">Project Showcase</p>
            <h2 className="mt-5 text-4xl font-semibold uppercase tracking-[0.08em] text-slate-100 sm:text-5xl">
              AI research lab interface
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              A featured project preview that combines engineering precision and clean AI design.
              This panel is built to highlight your next big model, research demo, or system prototype.
            </p>
          </div>
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 px-6 py-3 text-sm uppercase tracking-[0.22em] text-slate-100 transition hover:border-blue-500 hover:text-blue-100"
          >
            Explore projects
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="mt-10 rounded-[32px] border border-slate-800/80 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/40">
          <div className="grid gap-6 xl:grid-cols-[0.82fr_0.78fr] xl:items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-slate-400">
                <span className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs uppercase tracking-[0.28em]">
                  01
                </span>
                <span className="text-xs uppercase tracking-[0.3em] text-slate-400/80">Featured</span>
              </div>
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.3em] text-blue-300/80">Keet AI Console</p>
                <h3 className="text-3xl font-semibold text-slate-100">A modern AI experience for research and deployment.</h3>
                <p className="text-slate-400 leading-7">
                  This showcase is built to feel like a polished lab dashboard, with an elegant minimal interface
                  and a presentational project preview designed for recruiters and research collaborators.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  'Interactive model summary',
                  'Data-driven experiment tracking',
                  'Lightweight deployment panel',
                  'Clear engineering metrics',
                ].map((item) => (
                  <div key={item} className="rounded-3xl border border-slate-800/90 bg-slate-950/85 px-4 py-3 text-sm text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[30px] border border-slate-800/90 bg-slate-950/80 p-5 shadow-inner shadow-slate-950/30">
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-slate-900/90 px-3 py-2 text-xs uppercase tracking-[0.2em] text-slate-300">
                <LayoutDashboard size={14} /> Lab preview
              </div>
              <div className="mt-12 space-y-5">
                <div className="rounded-3xl border border-slate-800/90 bg-slate-900/90 p-5">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Model status</span>
                    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-200">Active</span>
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-3xl bg-slate-950/85 p-4 text-sm text-slate-300">Accuracy 92.4%</div>
                    <div className="rounded-3xl bg-slate-950/85 p-4 text-sm text-slate-300">Latency 120ms</div>
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-3xl bg-slate-950/90 p-4 text-slate-300">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500/80">Dataset</p>
                    <p className="mt-3 text-lg text-slate-100">Research corpus • 120k samples</p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {['NLP', 'Vision', 'Reinforcement'].map((item) => (
                      <span key={item} className="rounded-3xl border border-slate-800/90 bg-slate-950/85 px-3 py-2 text-center text-xs uppercase tracking-[0.18em] text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-3xl border border-slate-800/90 bg-gradient-to-r from-blue-500/10 to-transparent p-4 text-slate-200">
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>Latest commit</span>
                    <span>12 min ago</span>
                  </div>
                  <p className="mt-3 text-sm">Refined feature extraction and model validation workflow.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Showcase;
