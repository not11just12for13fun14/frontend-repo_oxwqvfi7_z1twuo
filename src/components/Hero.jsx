import { motion } from 'framer-motion'
import { Sparkles, FolderGit2, BadgeCheck } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-24">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 text-pink-600 border border-pink-200 shadow-sm backdrop-blur">
              <Sparkles size={16} />
              <span className="text-xs font-semibold tracking-wide uppercase">Anime pastel vibes</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              viewport={{ once: true }}
              className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-800">
              Hey! I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500">Your Name</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-4 text-slate-700 text-lg leading-relaxed">
              A student developer crafting playful, performant web experiences. I love turning ideas into delightful apps with clean code and pretty pixels.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-br from-pink-500 to-fuchsia-600 text-white font-semibold shadow-lg shadow-pink-400/40 hover:shadow-pink-500/50 transition">
                <FolderGit2 size={18} /> View Projects
              </a>
              <a href="#certs" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/80 text-slate-800 border border-slate-200 hover:bg-white transition">
                <BadgeCheck size={18} /> Certificates
              </a>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative mx-auto w-60 h-60 sm:w-72 sm:h-72 rounded-[2rem] bg-white/70 border border-slate-200 overflow-hidden shadow-2xl">
              {/* Avatar placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-pink-300 to-violet-300 border-4 border-white shadow-xl" />
              </div>
              {/* Floating mini elements */}
              <motion.div className="absolute -top-3 -left-3 w-16 h-16 rounded-xl bg-pink-200/70" animate={{ y: [0, 12, 0], rotate: [0, 6, 0] }} transition={{ duration: 4, repeat: Infinity }} />
              <motion.div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-xl bg-violet-200/70" animate={{ y: [0, -10, 0], rotate: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity }} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
