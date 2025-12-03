import { motion, useScroll, useTransform } from 'framer-motion'
import { SkillHover } from './SkillHover'
import { Brain, Rocket, Code, Server, Cloud } from 'lucide-react'
import { useRef } from 'react'

// Tech Card Component
const TechCard = ({ children, title, icon: Icon, className = "", delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className={`relative group w-[280px] ${className}`}
        >
            <div className="relative bg-slate-900/90 backdrop-blur-xl p-6 rounded-xl border border-astral-blue/30 hover:border-astral-blue transition-colors duration-300">
                {/* Icon Header */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-slate-900 border-2 border-astral-blue rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,255,255,0.3)] z-10">
                    <Icon className="w-6 h-6 text-astral-blue" />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-lg font-bold font-outfit text-white mb-4 uppercase tracking-wider text-center">
                    {title}
                </h3>

                {/* Content */}
                {children}
            </div>

            {/* Vertical Connector Line (Visual only, handled by parent SVG usually, but added here for mobile/fallback) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full h-8 w-0.5 bg-astral-blue/50 hidden md:block" />
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-8 w-2 h-2 rounded-full bg-astral-blue hidden md:block" />
        </motion.div>
    )
}

export const Skills = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const rocketX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const rocketY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"])
    const rocketRotate = useTransform(scrollYProgress, [0, 1], [45, 45]) // Keep it angled

    const skillData = [
        {
            title: "Programming",
            icon: Code,
            top: "65%",
            left: "15%",
            skills: [
                { name: "Python", image: "https://cdn.simpleicons.org/python" },
                { name: "JavaScript", image: "https://cdn.simpleicons.org/javascript" },
                { name: "Java", image: "https://cdn.simpleicons.org/openjdk" },
                { name: "SQL", image: "https://cdn.simpleicons.org/mysql" }
            ]
        },
        {
            title: "AI & ML",
            icon: Brain,
            top: "50%",
            left: "40%",
            skills: [
                { name: "NLP", image: "https://cdn-icons-png.flaticon.com/512/1693/1693746.png" },
                { name: "LLMs", image: "https://cdn-icons-png.flaticon.com/512/8637/8637102.png" },
                { name: "Transformers", image: "https://cdn.simpleicons.org/huggingface" },
                { name: "Scikit-learn", image: "https://cdn.simpleicons.org/scikitlearn" }
            ]
        },
        {
            title: "Frameworks",
            icon: Server,
            top: "35%",
            left: "65%",
            skills: [
                { name: "Flask", image: "https://cdn.simpleicons.org/flask/white" },
                { name: "React", image: "https://cdn.simpleicons.org/react" },
                { name: "Node.js", image: "https://cdn.simpleicons.org/nodedotjs" },
                { name: "Flutter", image: "https://cdn.simpleicons.org/flutter" }
            ]
        },
        {
            title: "Tools & Cloud",
            icon: Cloud,
            top: "20%",
            left: "90%",
            skills: [
                { name: "Git", image: "https://cdn.simpleicons.org/git" },
                { name: "AWS", image: "https://cdn.simpleicons.org/amazonwebservices" },
                { name: "Docker", image: "https://cdn.simpleicons.org/docker" },
                { name: "MongoDB", image: "https://cdn.simpleicons.org/mongodb" }
            ]
        }
    ]

    return (
        <section ref={containerRef} id="skills" className="min-h-screen py-20 px-4 relative overflow-hidden flex items-center justify-center">

            {/* Desktop View: Ascending Roadmap */}
            <div className="relative w-full max-w-7xl h-[800px] hidden md:block">

                {/* Title */}
                <div className="absolute top-0 left-10">
                    <h2 className="text-4xl font-bold font-outfit text-white uppercase tracking-widest">
                        Technical<br />Roadmap
                    </h2>
                </div>

                {/* Ascending Path SVG */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                    <defs>
                        <linearGradient id="path-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#00ffff" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#00ffff" stopOpacity="1" />
                        </linearGradient>
                    </defs>

                    {/* The Curve: Fine-tuned for alignment */}
                    <motion.path
                        d="M 0 600 C 300 600, 600 400, 1200 100"
                        fill="none"
                        stroke="url(#path-gradient)"
                        strokeWidth="4"
                        strokeDasharray="10 10"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />

                    {/* End Star/Goal */}
                    <motion.path
                        d="M 1200 100 L 1220 80 L 1240 100 L 1220 120 Z"
                        fill="#00ffff"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 2, duration: 0.5 }}
                    />

                    {/* Vertical Connectors - Precisely aligned with path */}
                    {/* Programming: x=15% (~180px). Path Y approx 580 */}
                    <motion.line x1="15%" y1="72%" x2="15%" y2="65%" stroke="#00ffff" strokeWidth="2" strokeDasharray="4 4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.5 }} />
                    <circle cx="15%" cy="72%" r="4" fill="#00ffff" />

                    {/* AI & ML: x=40% (~480px). Path Y approx 480 */}
                    <motion.line x1="40%" y1="58%" x2="40%" y2="50%" stroke="#00ffff" strokeWidth="2" strokeDasharray="4 4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.8 }} />
                    <circle cx="40%" cy="58%" r="4" fill="#00ffff" />

                    {/* Frameworks: x=65% (~780px). Path Y approx 350 */}
                    <motion.line x1="65%" y1="42%" x2="65%" y2="35%" stroke="#00ffff" strokeWidth="2" strokeDasharray="4 4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 1.1 }} />
                    <circle cx="65%" cy="42%" r="4" fill="#00ffff" />

                    {/* Tools: x=90% (~1080px). Path Y approx 180 */}
                    <motion.line x1="90%" y1="25%" x2="90%" y2="20%" stroke="#00ffff" strokeWidth="2" strokeDasharray="4 4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 1.4 }} />
                    <circle cx="90%" cy="25%" r="4" fill="#00ffff" />

                </svg>

                {/* Skill Cards Positioned Absolutely */}
                {skillData.map((category, index) => (
                    <div
                        key={index}
                        className="absolute transform -translate-x-1/2 -translate-y-full"
                        style={{ top: category.top, left: category.left }}
                    >
                        <TechCard
                            title={category.title}
                            icon={category.icon}
                            delay={index * 0.3}
                        >
                            <SkillHover skills={category.skills} />
                        </TechCard>
                    </div>
                ))}

                {/* Rocket Icon - Animated on Scroll */}
                <motion.div
                    style={{
                        left: rocketX,
                        top: rocketY,
                        rotate: rocketRotate,
                        offsetPath: "path('M 0 600 C 300 600, 600 400, 1200 100')",
                    }}
                    className="absolute w-16 h-16 z-20 pointer-events-none"
                >
                    <Rocket className="w-full h-full text-astral-blue drop-shadow-[0_0_15px_#00ffff]" />
                </motion.div>

            </div>

            {/* Mobile View (Stacked Vertical Timeline) */}
            <div className="md:hidden w-full space-y-12 relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-astral-blue/30 border-l-2 border-dashed border-astral-blue/30" />

                <div className="text-center mb-8 pl-12">
                    <h2 className="text-3xl font-bold font-outfit text-white uppercase tracking-widest text-left">
                        Technical<br />Roadmap
                    </h2>
                </div>

                {skillData.map((category, index) => (
                    <div key={index} className="relative pl-16">
                        {/* Timeline Dot */}
                        <div className="absolute left-8 -translate-x-1/2 top-8 w-4 h-4 bg-astral-blue rounded-full shadow-[0_0_10px_#00ffff]" />

                        <TechCard
                            title={category.title}
                            icon={category.icon}
                            delay={index * 0.2}
                            className="w-full"
                        >
                            <SkillHover skills={category.skills} />
                        </TechCard>
                    </div>
                ))}
            </div>

        </section>
    )
}
