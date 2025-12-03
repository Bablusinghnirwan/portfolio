import { ProjectFlowchart } from './ProjectFlowchart'
import { motion } from 'framer-motion'

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen py-20 pt-32 relative z-10 flex flex-col justify-center">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h3 className="text-astral-blue text-sm font-bold tracking-[0.2em] uppercase mb-4">
                        Selected Works
                    </h3>
                    <h2 className="text-5xl md:text-7xl font-outfit font-bold text-white uppercase tracking-tight">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Projects</span>
                    </h2>
                </motion.div>

                <ProjectFlowchart />
            </div>
        </section>
    )
}
