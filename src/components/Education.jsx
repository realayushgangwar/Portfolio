import { motion } from 'framer-motion';
import { GraduationCap, MapPin, CalendarDays, Award } from 'lucide-react';

function Education() {
  return (
    <section id="education" className="py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="rounded-[32px] border border-slate-800/80 bg-slate-950/85 p-8 shadow-glass backdrop-blur-xl"
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-blue-300/80">Education</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-100">B.Tech Computer Science Engineering</h2>
            <p className="mt-3 max-w-2xl text-slate-400 leading-7">
              Specialization in Artificial Intelligence and Machine Learning at GLA University, Mathura.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:max-w-sm">
            <div className="rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5">
              <div className="flex items-center gap-3 text-blue-300">
                <GraduationCap size={20} />
                <p className="text-sm uppercase tracking-[0.2em]">Program</p>
              </div>
              <p className="mt-3 text-slate-100 font-semibold">AI & ML</p>
              <p className="mt-2 text-slate-400 text-sm">2025 - 2029</p>
            </div>
            <div className="rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5">
              <div className="flex items-center gap-3 text-purple-300">
                <MapPin size={20} />
                <p className="text-sm uppercase tracking-[0.2em]">Location</p>
              </div>
              <p className="mt-3 text-slate-100 font-semibold">GLA University, Mathura</p>
              <p className="mt-2 text-slate-400 text-sm">India</p>
            </div>
            <div className="rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5">
              <div className="flex items-center gap-3 text-sky-300">
                <CalendarDays size={20} />
                <p className="text-sm uppercase tracking-[0.2em]">Duration</p>
              </div>
              <p className="mt-3 text-slate-100 font-semibold">4 Years</p>
              <p className="mt-2 text-slate-400 text-sm">Focused on AI coursework and applied projects.</p>
            </div>
            <div className="rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5">
              <div className="flex items-center gap-3 text-teal-300">
                <Award size={20} />
                <p className="text-sm uppercase tracking-[0.2em]">CPI</p>
              </div>
              <p className="mt-3 text-slate-100 font-semibold">7.6</p>
              <p className="mt-2 text-slate-400 text-sm">Maintaining strong academic performance while building skills.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Education;
