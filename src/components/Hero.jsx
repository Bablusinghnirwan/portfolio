import { motion } from 'framer-motion'
import TextType from './TextType'

export const Hero = () => {
    return (
        <section id="hero" className="h-screen flex flex-col justify-center items-center text-center relative z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="relative z-20 px-4"
            >
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-astral-blue tracking-[0.2em] text-sm md:text-base mb-4 uppercase font-bold"
                >
                    Portfolio
                </motion.h2>

                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="text-5xl md:text-8xl font-bold font-outfit mb-6 text-white tracking-tight uppercase"
                >
                    Bablu Singh<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Nirwan</span>
                </motion.h1>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                    className="flex flex-col items-center gap-4"
                >
                    <TextType
                        text={["AI & ML ENGINEER", "NLP SPECIALIST", "FULL STACK DEVELOPER"]}
                        typingSpeed={100}
                        deletingSpeed={50}
                        pauseDuration={2000}
                        className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto tracking-wide font-light"
                        cursorCharacter="|"
                    />
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-0 w-full flex justify-center items-center z-20"
            >
                <div className="flex flex-col items-center gap-2 text-gray-500 text-xs tracking-[0.2em] uppercase animate-pulse">
                    <span>Scroll to Explore</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
                </div>
            </motion.div>
        </section>
    )
}
