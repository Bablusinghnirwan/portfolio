import { motion } from 'framer-motion'

export const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-sm text-astral-blue tracking-[0.2em] uppercase font-bold mb-4">
                        Contact
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold font-outfit text-white uppercase tracking-tight">
                        Get In Touch
                    </h3>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
                        <a
                            href="mailto:bablusingh55412@gmail.com"
                            className="px-8 py-3 bg-white text-black rounded-none font-bold uppercase tracking-widest hover:bg-astral-blue transition-colors duration-300"
                        >
                            Email Me
                        </a>
                        <a
                            href="https://www.linkedin.com/in/bablu-singh-nirwan-/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 border border-white/20 text-white rounded-none font-bold uppercase tracking-widest hover:border-astral-blue hover:text-astral-blue transition-colors duration-300"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/Bablusinghnirwan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 border border-white/20 text-white rounded-none font-bold uppercase tracking-widest hover:border-astral-blue hover:text-astral-blue transition-colors duration-300"
                        >
                            GitHub
                        </a>
                    </div>
                    <footer className="mt-20 text-gray-600 text-xs uppercase tracking-widest">
                        <p>© {new Date().getFullYear()} Bablu Singh Nirwan. All rights reserved.</p>
                    </footer>
                </motion.div>
            </div>
        </section>
    )
}
