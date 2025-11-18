import { motion } from 'framer-motion'
import { ExternalLink, Star } from 'lucide-react'

const projects = [
  {
    title: 'Anime Quotes App',
    desc: 'Fetches and displays inspirational anime quotes with cute transitions.',
    stack: ['React', 'Tailwind', 'API'],
    link: '#'
  },
  {
    title: 'Study Planner',
    desc: 'A pastel-themed planner for tasks, deadlines, and focus sessions.',
    stack: ['React', 'Redux', 'Framer Motion'],
    link: '#'
  },
  {
    title: 'Portfolio v1',
    desc: 'First portfolio with simple grid, now upgraded to this one!',
    stack: ['HTML', 'CSS', 'JS'],
    link: '#'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-24">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-8">
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              href={p.link}
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl bg-white/70 border border-slate-200 backdrop-blur shadow-lg hover:shadow-pink-300/40 hover:-translate-y-1 transition relative">
              <div className="absolute right-4 top-4 text-pink-500 opacity-0 group-hover:opacity-100 transition">
                <ExternalLink size={18} />
              </div>
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-slate-800">{p.title}</h3>
                <Star className="text-amber-400" size={18} />
              </div>
              <p className="text-sm text-slate-600 mt-2">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map(s => (
                  <span key={s} className="px-2 py-0.5 text-xs rounded-full bg-slate-100 text-slate-700 border border-slate-200">{s}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
