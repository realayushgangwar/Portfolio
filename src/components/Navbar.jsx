import { motion } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Learning', href: '#learning' },
  { label: 'Projects', href: '#projects' },
  { label: 'Beyond Code', href: '#beyond' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-3 group"
        >
          <span className="text-base font-bold tracking-wider text-slate-100 uppercase group-hover:text-sky-400 transition-colors">
            Ayush Gangwar
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-widest text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2 py-0.5 rounded-full sm:inline-block shadow-sm shadow-sky-500/20">
            CSE '29
          </span>
        </motion.a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ y: -2, color: '#38bdf8' }}
              whileTap={{ y: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="relative px-2 py-1 text-xs uppercase tracking-widest text-slate-400 font-medium transition-colors"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(56, 189, 248, 0.4)' }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full bg-sky-500 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 shadow-md shadow-sky-500/20 transition hover:bg-sky-400"
        >
          Let's Connect
        </motion.a>
      </div>
    </motion.header>
  );
}

export default Navbar;
