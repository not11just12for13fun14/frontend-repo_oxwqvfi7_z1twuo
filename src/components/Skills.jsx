import { motion } from 'framer-motion'
import { Code2, Globe2, Cpu, Palette } from 'lucide-react'

const skills = [
  { icon: Code2, name: 'JavaScript', level: 'Advanced', color: 'from-amber-200 to-amber-300' },
  { icon: Globe2, name: 'React', level: 'Advanced', color: 'from-sky-200 to-sky-300' },
  { icon: Cpu, name: 'Python', level: 'Intermediate', color: 'from-emerald-200 to-emerald-300' },
  { icon: Palette, name: 'UI/UX', level: 'Intermediate', color: 'from-pink-200 to-pink-300' },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-24">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-8">
          Skills
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl bg-white/70 border border-slate-200 backdrop-blur shadow-lg">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center text-slate-700 mb-3`}>
                <s.icon size={20} />
              </div>
              <h3 className="font-semibold text-slate-800">{s.name}</h3>
              <p className="text-sm text-slate-600">{s.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
