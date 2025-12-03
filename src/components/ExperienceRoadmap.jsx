import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { MapPin, Calendar, Building2 } from "lucide-react"
import RingBackground from "./RingBackground"
import FlipText from "./FlipText"
import FlipParagraph from "./FlipParagraph"

const experiences = [
    {
        id: "01",
        role: "Electron Developer",
        company: "MeaDocs",
        period: "Jun 2025 – Present",
        location: "India",
        description: "Built a cross-platform Electron desktop application integrating local AI/ML workflows.",
        points: [
            "Developed Node.js + Python backend for high-speed file indexing.",
            "Reduced file search latency from 2.5s to 1.8s (~30% improvement).",
            "Optimized data-processing pipeline."
        ],
        color: "text-astral-blue",
        bgColor: "bg-astral-blue",
        borderColor: "border-astral-blue"
    },
    {
        id: "02",
        role: "NLP Engineer",
        company: "Sentiva",
        period: "Oct 2024 – May 2025",
        location: "Remote",
        description: "Built an end-to-end sentiment analysis system using Python, Scikit-learn, and TF-IDF.",
        points: [
            "Implemented text preprocessing improving model performance.",
            "Trained ML models achieving 90%+ classification accuracy.",
            "Developed Flask-based inference API."
        ],
        color: "text-pink-500",
        bgColor: "bg-pink-500",
        borderColor: "border-pink-500"
    }
]

export const ExperienceRoadmap = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1])

    return (
        <div ref={containerRef} className="relative w-full max-w-4xl mx-auto py-20">
            {/* The Road SVG */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[600px] hidden md:block pointer-events-none">
                <svg
                    viewBox="0 0 600 800"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                >
                    {/* Road Base */}
                    <path
                        d="M 300 0 Q 450 200 300 400 Q 150 600 300 800"
                        stroke="#1a1a2e"
                        strokeWidth="60"
                        strokeLinecap="round"
                    />
                    {/* Road Dashed Line */}
                    <motion.path
                        d="M 300 0 Q 450 200 300 400 Q 150 600 300 800"
                        stroke="white"
                        strokeWidth="4"
                        strokeDasharray="20 20"
                        strokeLinecap="round"
                        style={{ pathLength }}
                    />
                </svg>
            </div>

            {/* Mobile Line (Simple vertical line) */}
            <div className="absolute top-0 left-8 bottom-0 w-1 bg-white/10 md:hidden" />

            <div className="relative z-10 flex flex-col gap-32 md:gap-48">
                {experiences.map((exp, index) => {
                    const isEven = index % 2 === 0
                    return (
                        <div
                            key={index}
                            className={`flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col relative group`}
                        >
                            {/* Marker on the Road */}
                            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gray-900 border-4 border-white z-20 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                <div className={`w-4 h-4 rounded-full ${exp.bgColor}`} />
                            </div>

                            {/* Content Card */}
                            <motion.div
                                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className={`w-full md:w-[45%] pl-24 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'} relative`}
                            >
                                {/* Ring Animation Background - Centered behind the card content */}
                                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none ${isEven ? 'md:translate-x-[-20%]' : 'md:translate-x-[20%]'}`}>
                                    <RingBackground />
                                </div>

                                <div className="relative z-10">
                                    {/* Number Badge */}
                                    <div className={`absolute -top-8 ${isEven ? 'md:right-0' : 'md:left-0'} left-0 text-6xl font-bold font-outfit text-white/5 select-none`}>
                                        {exp.id}
                                    </div>

                                    <h3 className={`text-2xl font-bold font-outfit text-white uppercase mb-2 ${exp.color}`}>
                                        <FlipText>{exp.role}</FlipText>
                                    </h3>

                                    <div className={`flex items-center gap-4 text-sm text-gray-400 mb-4 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                                        <span className="flex items-center gap-1">
                                            <Building2 size={14} />
                                            <FlipText>{exp.company}</FlipText>
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            <FlipText>{exp.period}</FlipText>
                                        </span>
                                    </div>

                                    <div className={`p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/20 transition-colors ${isEven ? 'rounded-tr-none' : 'rounded-tl-none'}`}>
                                        <div className="text-gray-300 mb-4 leading-relaxed">
                                            <FlipParagraph>{exp.description}</FlipParagraph>
                                        </div>
                                        <ul className={`space-y-2 text-sm text-gray-400 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                                            {exp.points.map((point, i) => (
                                                <li key={i} className="leading-relaxed">
                                                    <span className="inline-block mr-2">•</span>
                                                    <FlipParagraph className="inline">{point}</FlipParagraph>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Spacer for the other side */}
                            <div className="hidden md:block w-[45%]" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

