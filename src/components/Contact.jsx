import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks! Your message has been sent.')
  }

  return (
    <section id="contact" className="relative py-16 sm:py-24">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-8">
          Contact
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-white/70 border border-slate-200 backdrop-blur shadow-lg">
            <form onSubmit={onSubmit} className="space-y-3">
              <input className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-pink-300" placeholder="Your name" required />
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-pink-300" placeholder="Email" required />
              <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-pink-300" placeholder="Message" required />
              <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-br from-pink-500 to-fuchsia-600 text-white font-semibold shadow-lg shadow-pink-400/40 hover:shadow-pink-500/50 transition">
                <Send size={18} /> Send Message
              </button>
              {status && <p className="text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-lg">{status}</p>}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-white/70 border border-slate-200 backdrop-blur shadow-lg">
            <p className="text-slate-700">Prefer email? Reach me at</p>
            <a href="mailto:you@example.com" className="mt-2 inline-block font-semibold text-pink-600">you@example.com</a>
            <p className="mt-4 text-slate-600 text-sm">I usually respond within 24 hours.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
