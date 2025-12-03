import { motion } from 'framer-motion'
import { ExperienceRoadmap } from './ExperienceRoadmap'

export const Experience = () => {
    return (
        <section id="experience" className="min-h-screen flex items-center justify-center py-20 px-4 relative z-10">
            <div className="max-w-4xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm text-astral-blue tracking-[0.2em] uppercase font-bold mb-4">
                        Career Path
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold font-outfit text-white uppercase tracking-tight">
                        Professional Experience
                    </h3>
                </motion.div>

                <ExperienceRoadmap />
            </div>
        </section>
    )
}
