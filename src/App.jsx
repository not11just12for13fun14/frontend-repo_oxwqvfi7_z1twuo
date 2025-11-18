import AnimeBackground from './components/AnimeBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative min-h-screen">
      <AnimeBackground />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />

        <footer className="py-10 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} Your Name — Built with love and pastel pixels.
        </footer>
      </div>
    </div>
  )
}

export default App
