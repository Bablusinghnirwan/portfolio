import { CanvasContainer } from './components/CanvasContainer'
import SplashCursor from './components/SplashCursor'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

function App() {
  return (
    <div className="relative w-full h-screen bg-gray-900">
      <SplashCursor />
      <Navbar />
      <CanvasContainer />
      <main className="absolute top-0 left-0 w-full h-full overflow-y-auto overflow-x-hidden z-10 scroll-smooth">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
