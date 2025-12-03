import { motion } from 'framer-motion'
import FlipText from './FlipText'
import FlipParagraph from './FlipParagraph'

export const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4 relative z-10">
            <div className="max-w-6xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <h2 className="mb-4">
                            <FlipText className="text-sm md:text-base text-astral-blue tracking-[0.2em] uppercase font-bold">
                                Explorer Mindset
                            </FlipText>
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-bold font-outfit text-white mb-8 uppercase leading-tight">
                            <FlipText className="text-white">
                                Navigating the
                            </FlipText>
                            <br />
                            <FlipText className="text-gray-500">
                                Frontiers of AI
                            </FlipText>
                        </h3>
                    </div>

                    <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
                        <FlipParagraph>
                            I am an AI & ML Engineer based in Indore, India, dedicated to building scalable machine learning pipelines and real-time intelligence systems.
                        </FlipParagraph>
                        <FlipParagraph>
                            My expertise lies in Natural Language Processing (NLP), Large Language Models (LLMs), and end-to-end AI product development. I thrive on converting complex data into actionable insights and functional products.
                        </FlipParagraph>

                        <div className="grid grid-cols-2 gap-8 mt-12 pt-8 border-t border-white/10">
                            <div>
                                <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-2">Education</h4>
                                <p className="text-gray-400 text-sm">B.Tech, CSE</p>
                                <p className="text-gray-500 text-xs mt-1">RGPV University (2022 – 2026)</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-2">Location</h4>
                                <p className="text-gray-400 text-sm">Indore, India</p>
                                <p className="text-gray-500 text-xs mt-1">Open to Remote</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

