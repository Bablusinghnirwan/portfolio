import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
    {
        title: "AI Routine Planner",
        role: "Flutter Developer",
        description: "Flutter-based productivity app integrating AI-driven routine coaching. Added AI Coach for habit tracking, task reflection, and personalized guidance.",
        tags: ["Flutter", "AI", "Mobile"],
        link: "#"
    },
    {
        title: "MeaDocs App",
        role: "Full Stack Developer",
        description: "AI Photo Search App (Electron → Flutter). Implemented local AI-powered photo search using on-device ML indexing.",
        tags: ["Electron", "Flutter", "ML", "Dart"],
        link: "#"
    },
    {
        title: "Saarni",
        role: "Python Developer",
        description: "AI Train Traffic Management System. Automated scheduling and platform-allocation system using Python optimization.",
        tags: ["Python", "Optimization", "Dashboards"],
        link: "#"
    },
    {
        title: "AayushCare",
        role: "Web Developer",
        description: "AI Healthcare Assistance Web App. Integrated NLP-based symptom analysis for patient interaction.",
        tags: ["Flask", "JS", "NLP", "Google Sheets"],
        link: "#"
    },
    {
        title: "Fake News Detection",
        role: "ML Engineer",
        description: "Developed multilingual text classification pipeline (English/Hindi/Hinglish) with LLM-based reasoning.",
        tags: ["LLM", "Transformers", "NLP"],
        link: "#"
    }
]

export const ProjectSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const nextProject = () => {
        setActiveIndex((prev) => (prev + 1) % projects.length)
    }

    const prevProject = () => {
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
    }

    return (
        <div className="relative w-full h-[600px] flex flex-col items-center justify-center perspective-1000">
            {/* 3D Carousel */}
            <div className="relative w-full max-w-4xl h-[400px] flex items-center justify-center">
                <AnimatePresence mode="popLayout">
                    {projects.map((project, index) => {
                        // Calculate circular offset
                        const length = projects.length
                        let offset = (index - activeIndex + length) % length
                        // Adjust offset to be centered (e.g., -2, -1, 0, 1, 2)
                        if (offset > length / 2) offset -= length

                        const isActive = index === activeIndex
                        const isVisible = Math.abs(offset) <= 2 // Only show 2 neighbors

                        return (
                            <motion.div
                                key={index}
                                className={`absolute w-[300px] md:w-[400px] h-[500px] bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl p-8 flex flex-col justify-between cursor-pointer transition-all duration-500 ${isActive ? 'border-astral-blue/50 z-30 shadow-[0_0_30px_rgba(0,255,255,0.1)]' : 'z-10 hover:border-white/30'}`}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{
                                    scale: isActive ? 1 : 0.85,
                                    opacity: isVisible ? (isActive ? 1 : 0.5) : 0,
                                    x: offset * 120, // Tighter overlap for stack effect, or use larger for row. Let's try a spread stack.
                                    z: -Math.abs(offset) * 100,
                                    rotateY: offset * -15,
                                    display: isVisible ? 'flex' : 'none'
                                }}
                                style={{
                                    zIndex: 30 - Math.abs(offset)
                                }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                onClick={() => setActiveIndex(index)}
                            >
                                <div>
                                    <div className="text-astral-blue text-sm tracking-widest mb-2 uppercase">{project.role}</div>
                                    <h3 className="text-3xl font-outfit font-bold text-white mb-4 uppercase">{project.title}</h3>
                                    <div className="w-12 h-1 bg-astral-blue mb-6"></div>
                                    <p className="text-gray-400 leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                </div>

                                <div>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1 text-xs border border-white/20 rounded-full text-gray-300 uppercase tracking-wider">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <button className="text-astral-blue uppercase tracking-widest text-sm hover:text-white transition-colors flex items-center gap-2 group">
                                        View Project <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </button>
                                </div>
                            </motion.div>
                        )
                    })}
                </AnimatePresence>
            </div>

            {/* Navigation & Pagination */}
            <div className="absolute bottom-0 w-full flex flex-col items-center gap-6 z-30">
                <div className="flex items-center gap-8">
                    <button onClick={prevProject} className="text-gray-500 hover:text-white transition-colors text-xl">←</button>
                    <div className="flex gap-3">
                        {projects.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 bg-astral-blue' : 'bg-gray-600 hover:bg-gray-400'}`}
                            />
                        ))}
                    </div>
                    <button onClick={nextProject} className="text-gray-500 hover:text-white transition-colors text-xl">→</button>
                </div>

                {/* Active Project Text Animation */}
                <div className="h-12 overflow-hidden text-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-gray-500 text-sm uppercase tracking-[0.3em]"
                        >
                            Project {activeIndex + 1} / {projects.length}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}
