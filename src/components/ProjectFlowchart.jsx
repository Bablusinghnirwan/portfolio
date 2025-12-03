import { Code, Smartphone, Globe, Database, Brain, ArrowRight } from "lucide-react"
import LogoLoop from "./LogoLoop"

const projects = [
    {
        id: "01",
        title: "AI Routine Planner",
        role: "Flutter Developer",
        description: "Flutter-based productivity app integrating AI-driven routine coaching. Added AI Coach for habit tracking.",
        tags: ["Flutter", "AI", "Mobile"],
        icon: Smartphone,
        color: "text-blue-400",
        borderColor: "border-blue-400",
        bgGradient: "from-blue-500/20 to-transparent"
    },
    {
        id: "02",
        title: "MeaDocs App",
        role: "Full Stack Developer",
        description: "AI Photo Search App. Implemented local AI-powered photo search using on-device ML indexing.",
        tags: ["Electron", "Flutter", "ML"],
        icon: Database,
        color: "text-purple-400",
        borderColor: "border-purple-400",
        bgGradient: "from-purple-500/20 to-transparent"
    },
    {
        id: "03",
        title: "Saarni",
        role: "Python Developer",
        description: "AI Train Traffic Management System. Automated scheduling and platform-allocation system.",
        tags: ["Python", "Optimization"],
        icon: Code,
        color: "text-pink-400",
        borderColor: "border-pink-400",
        bgGradient: "from-pink-500/20 to-transparent"
    },
    {
        id: "04",
        title: "AayushCare",
        role: "Web Developer",
        description: "AI Healthcare Assistance Web App. Integrated NLP-based symptom analysis for patient interaction.",
        tags: ["Flask", "JS", "NLP"],
        icon: Globe,
        color: "text-emerald-400",
        borderColor: "border-emerald-400",
        bgGradient: "from-emerald-500/20 to-transparent"
    },
    {
        id: "05",
        title: "Fake News Detection",
        role: "ML Engineer",
        description: "Developed multilingual text classification pipeline with LLM-based reasoning.",
        tags: ["LLM", "Transformers"],
        icon: Brain,
        color: "text-orange-400",
        borderColor: "border-orange-400",
        bgGradient: "from-orange-500/20 to-transparent"
    }
]

export const ProjectFlowchart = () => {
    return (
        <div className="relative w-full py-20 overflow-hidden">
            {/* Central Line - Absolute background for the whole section */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0" />

            <LogoLoop
                logos={projects}
                speed={50} // Adjust speed as needed
                direction="left"
                logoHeight={600} // Needs to be tall enough for the alternating layout
                gap={0} // We handle spacing in the item
                pauseOnHover={true}
                renderItem={(project, index) => {
                    // We need to determine if it's even or odd based on the index.
                    // The index passed by LogoLoop might be a string like "0-1" (copyIndex-itemIndex)
                    // We need the actual item index to maintain the alternating pattern.
                    // However, LogoLoop passes the item object itself.
                    // Let's rely on the project.id or find the index in the original array.
                    const originalIndex = projects.findIndex(p => p.id === project.id);
                    const isEven = originalIndex % 2 === 0;
                    const Icon = project.icon;

                    return (
                        <div className="relative w-[300px] flex flex-col items-center group h-full justify-center">

                            {/* Top Section */}
                            <div className={`h-[200px] w-full flex flex-col justify-end items-center pb-6 transition-all duration-500 ${isEven ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                {isEven && (
                                    <ProjectCard project={project} position="top" />
                                )}
                            </div>

                            {/* Central Node */}
                            <div className="relative z-10 flex items-center justify-center">
                                <div className={`w-10 h-10 rounded-full bg-black border-2 ${project.borderColor} flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className={`w-5 h-5 ${project.color}`} />
                                </div>
                                {/* Number Badge */}
                                <div className={`absolute -top-6 font-outfit font-bold text-2xl ${project.color} opacity-20`}>
                                    {project.id}
                                </div>
                            </div>

                            {/* Bottom Section */}
                            <div className={`h-[200px] w-full flex flex-col justify-start items-center pt-6 transition-all duration-500 ${!isEven ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                                {!isEven && (
                                    <ProjectCard project={project} position="bottom" />
                                )}
                            </div>

                            {/* Connecting Line (Dashed Curve) */}
                            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-30" style={{ overflow: 'visible' }}>
                                {isEven ? (
                                    <path
                                        d="M 150 280 L 150 248"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeDasharray="4 4"
                                        className={project.color}
                                    />
                                ) : (
                                    <path
                                        d="M 150 320 L 150 352"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeDasharray="4 4"
                                        className={project.color}
                                    />
                                )}
                            </svg>

                        </div>
                    )
                }}
            />
        </div>
    )
}

const ProjectCard = ({ project, position }) => (
    <div className={`relative w-[220px] p-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl hover:border-white/30 transition-colors group/card ${position === 'top' ? 'mb-2' : 'mt-2'}`}>
        {/* Connector Dot */}
        <div className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full ${project.color.replace('text-', 'bg-')} ${position === 'top' ? '-bottom-1' : '-top-1'}`} />

        <div className={`absolute inset-0 bg-gradient-to-b ${project.bgGradient} opacity-0 group-hover/card:opacity-100 transition-opacity rounded-xl`} />

        <div className="relative z-10">
            <span className={`text-[10px] font-bold tracking-widest uppercase ${project.color} mb-1 block`}>
                {project.role}
            </span>
            <h3 className="text-lg font-outfit font-bold text-white mb-2 leading-tight">
                {project.title}
            </h3>
            <p className="text-gray-400 text-xs leading-relaxed mb-3 line-clamp-3">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="px-1.5 py-0.5 text-[9px] border border-white/10 rounded-full text-gray-400 uppercase tracking-wider">
                        {tag}
                    </span>
                ))}
            </div>

            <button className={`text-[10px] font-bold uppercase tracking-widest ${project.color} flex items-center gap-1 group-hover/card:gap-2 transition-all`}>
                View Details <ArrowRight size={12} />
            </button>
        </div>
    </div>
)
