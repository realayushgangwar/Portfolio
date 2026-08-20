import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-900/90 p-8 sm:p-12 backdrop-blur-xl shadow-2xl"
      >
        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-sky-500/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl animate-pulse" />

        <div className="max-w-2xl mx-auto text-center space-y-4 relative z-10">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-sky-400">// 06. Get In Touch</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl">
            Let's Connect
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            I am actively seeking internship opportunities, research collaborations, and projects to apply my AI/ML and software engineering skills. Feel free to reach out via email or connect on social platforms!
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 relative z-10">
          <motion.a
            href="mailto:realayushgangwar@gmail.com"
            whileHover={{ scale: 1.05, y: -3, borderColor: 'rgba(56, 189, 248, 0.6)', boxShadow: '0 8px 20px -5px rgba(56, 189, 248, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900/90 px-6 py-3.5 text-sm font-medium text-slate-100 transition-colors"
          >
            <Mail size={18} className="text-sky-400" />
            realayushgangwar@gmail.com
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/realayushgangwar"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, y: -3, borderColor: 'rgba(129, 140, 248, 0.6)', boxShadow: '0 8px 20px -5px rgba(129, 140, 248, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900/90 px-6 py-3.5 text-sm font-medium text-slate-100 transition-colors"
          >
            <Linkedin size={18} className="text-indigo-400" />
            LinkedIn Profile
          </motion.a>

          <motion.a
            href="https://github.com/realayushgangwar"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, y: -3, borderColor: 'rgba(52, 211, 153, 0.6)', boxShadow: '0 8px 20px -5px rgba(52, 211, 153, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900/90 px-6 py-3.5 text-sm font-medium text-slate-100 transition-colors"
          >
            <Github size={18} className="text-emerald-400" />
            GitHub Profile
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
