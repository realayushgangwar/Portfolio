import { motion } from 'framer-motion';
import { MessageSquare, Cpu } from 'lucide-react';

function AIChatbot() {
  return (
    <section id="chatbot" className="py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="rounded-[32px] border border-slate-800/80 bg-slate-950/85 p-8 shadow-glass backdrop-blur-xl"
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-300/80">AI Chatbot</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-100 sm:text-4xl">
              Ayush AI Assistant
            </h2>
            <p className="mt-4 text-slate-400 leading-7">
              A future-ready chatbot interface designed to answer questions about my skills, projects, education,
              and interests. This UI is ready for API integration when you add an AI backend.
            </p>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-900/80 text-sky-300">
            <Cpu size={24} />
          </div>
        </div>
        <div className="mt-10 rounded-[28px] border border-slate-800/80 bg-slate-900/70 p-6">
          <div className="flex items-center justify-between rounded-3xl bg-slate-950/80 px-5 py-4">
            <div>
              <p className="text-sm font-medium text-slate-100">Ayush AI Assistant</p>
              <p className="text-slate-500 text-sm">Type a question about my portfolio and skills.</p>
            </div>
            <div className="rounded-2xl bg-blue-500/15 px-3 py-2 text-xs uppercase tracking-[0.25em] text-blue-200">
              Demo UI
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-4 text-slate-300">
              <p className="text-sm"><span className="font-semibold text-slate-100">User:</span> Tell me about Ayush's AI skills.</p>
            </div>
            <div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-4 text-slate-300">
              <p className="text-sm"><span className="font-semibold text-slate-100">Ayush AI Assistant:</span> I specialize in AI and ML, with experience in Machine Learning, Deep Learning, NLP, Computer Vision, and building engineering-focused solutions.</p>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              placeholder="Ask a question..."
              className="w-full rounded-3xl border border-slate-800/80 bg-slate-950/80 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
            />
            <button className="inline-flex items-center justify-center rounded-3xl bg-blue-500 px-5 py-3 text-sm font-medium text-white hover:bg-blue-400">
              Send message
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default AIChatbot;
