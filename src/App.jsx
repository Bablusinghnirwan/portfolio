import { Routes, Route } from 'react-router-dom'
import { CanvasContainer } from './components/CanvasContainer'
import SplashCursor from './components/SplashCursor'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { AllProjectsPage } from './pages/AllProjectsPage'
import { ProjectDetailsPage } from './pages/ProjectDetailsPage'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
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
        } />
        <Route path="/projects" element={<AllProjectsPage />} />
        <Route path="/project/:id" element={<ProjectDetailsPage />} />
      </Routes>
    </>
  )
}

export default App
