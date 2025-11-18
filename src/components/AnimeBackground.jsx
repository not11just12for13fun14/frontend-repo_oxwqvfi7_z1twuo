import { motion } from 'framer-motion'

// Soft pastel anime-inspired floating shapes and sparkles
export default function AnimeBackground() {
  const blobs = [
    { color: 'from-pink-200/70 to-pink-300/40', size: 'w-[42rem] h-[42rem]', x: '-10%', y: '-10%', blur: 'blur-3xl', delay: 0 },
    { color: 'from-sky-200/70 to-sky-300/40', size: 'w-[36rem] h-[36rem]', x: '70%', y: '-15%', blur: 'blur-3xl', delay: 0.2 },
    { color: 'from-lime-200/70 to-emerald-200/40', size: 'w-[28rem] h-[28rem]', x: '10%', y: '70%', blur: 'blur-3xl', delay: 0.4 },
    { color: 'from-violet-200/70 to-fuchsia-200/40', size: 'w-[32rem] h-[32rem]', x: '75%', y: '70%', blur: 'blur-3xl', delay: 0.6 },
  ]

  const sparkleVariants = {
    initial: { opacity: 0, scale: 0.6 },
    animate: (i) => ({
      opacity: [0, 1, 0],
      scale: [0.6, 1, 0.6],
      y: [0, -20, 0],
      transition: {
        duration: 3 + (i % 3) * 0.5,
        repeat: Infinity,
        delay: (i % 5) * 0.3,
        ease: 'easeInOut',
      },
    }),
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-sky-50 to-violet-50" />

      {/* Big floating blobs */}
      {blobs.map((b, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0.6, y: 0 }}
          animate={{ y: [0, 20, -15, 0] }}
          transition={{ duration: 12 + idx * 2, repeat: Infinity, ease: 'easeInOut', delay: b.delay }}
          style={{ left: b.x, top: b.y }}
          className={`absolute rounded-full ${b.size} bg-gradient-to-br ${b.color} ${b.blur}`}>
        </motion.div>
      ))}

      {/* Subtle grid lines for anime UI vibe */}
      <div className="absolute inset-0 opacity-[0.18]" style={{
        backgroundImage: `linear-gradient(to right, rgba(146,151,179,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(146,151,179,0.2) 1px, transparent 1px)`,
        backgroundSize: '48px 48px',
      }} />

      {/* Sparkles */}
      <div className="absolute inset-0">
        {Array.from({ length: 36 }).map((_, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={sparkleVariants}
            initial="initial"
            animate="animate"
            className="absolute block"
            style={{
              left: `${(i * 137) % 100}%`,
              top: `${(i * 97) % 100}%`,
              filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.6))',
            }}
          >
            <span className="block w-1.5 h-1.5 rounded-full bg-white/90" />
          </motion.span>
        ))}
      </div>

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60" />
    </div>
  )
}
