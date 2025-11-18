import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const items = [
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#certs', label: 'Certificates' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="relative z-20">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-lg font-extrabold tracking-tight text-slate-800">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500">Student</span> Portfolio
        </a>
        <nav className="hidden sm:flex items-center gap-6">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="text-slate-700 hover:text-pink-600 transition font-medium">
              {it.label}
            </a>
          ))}
          <a href="#contact" className="ml-2 px-4 py-2 rounded-xl bg-pink-500 text-white font-semibold shadow-md shadow-pink-300/50 hover:bg-pink-600 transition">Hire Me</a>
        </nav>
        <button onClick={() => setOpen(!open)} className="sm:hidden p-2 rounded-lg bg-white/60 border border-slate-200">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="sm:hidden px-4 pb-4">
          <div className="rounded-2xl bg-white/80 border border-slate-200 p-4 space-y-2">
            {items.map((it) => (
              <a key={it.href} href={it.href} onClick={() => setOpen(false)} className="block px-2 py-2 rounded-lg text-slate-700 hover:bg-pink-50">
                {it.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
