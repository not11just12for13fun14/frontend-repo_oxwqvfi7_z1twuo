import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const certs = [
  { title: 'Frontend Developer Certification', issuer: 'FreeCodeCamp', year: '2024' },
  { title: 'Python for Everybody', issuer: 'Coursera', year: '2023' },
  { title: 'Responsive Web Design', issuer: 'Meta', year: '2023' },
]

export default function Certificates() {
  return (
    <section id="certs" className="relative py-16 sm:py-24">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-8 flex items-center gap-3">
          <Award className="text-pink-500" /> Certificates
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/70 border border-slate-200 backdrop-blur shadow-lg">
              <h3 className="font-semibold text-slate-800">{c.title}</h3>
              <p className="text-sm text-slate-600">{c.issuer}</p>
              <span className="inline-flex mt-3 px-2 py-0.5 text-xs rounded-full bg-pink-100 text-pink-700 border border-pink-200">{c.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
