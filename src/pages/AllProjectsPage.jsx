import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { projects } from '../data/projects'
import { Link, useNavigate } from 'react-router-dom'

export const AllProjectsPage = () => {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-gray-900 text-white overflow-y-auto">
            {/* Navigation Header */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-white/10">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold"
                    >
                        <ArrowLeft size={16} /> Back to Home
                    </button>
                    <div className="text-astral-blue font-bold tracking-[0.2em] text-sm uppercase">
                        Portfolio
                    </div>
                </div>
            </nav>

            <div className="container mx-auto px-6 py-32">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-outfit font-bold text-white uppercase mb-4">
                        All Projects
                    </h1>
                    <div className="w-20 h-1 bg-astral-blue"></div>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

const ProjectCard = ({ project, index }) => {
    const Icon = project.icon

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative p-4 rounded-xl border border-white/10 bg-white/5 hover:border-astral-blue/50 transition-colors flex flex-col h-full"
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-xl`} />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-black border border-white/10 flex items-center justify-center ${project.color}`}>
                        <Icon size={20} />
                    </div>
                    <span className="text-white/20 font-outfit font-bold text-lg">
                        {project.id}
                    </span>
                </div>

                <div className={`text-[10px] font-bold tracking-widest uppercase ${project.color} mb-1`}>
                    {project.role}
                </div>

                <h3 className="text-xl font-outfit font-bold text-white mb-2">
                    {project.title}
                </h3>

                <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-grow line-clamp-3">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="px-1.5 py-0.5 text-[9px] border border-white/10 rounded-full text-gray-400 uppercase tracking-wider">
                            {tag}
                        </span>
                    ))}
                </div>

                <Link
                    to={`/project/${project.id}`}
                    className="flex items-center gap-1.5 text-white hover:text-astral-blue transition-colors text-xs font-bold uppercase tracking-widest group/btn mt-auto"
                >
                    View Details <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>
    )
}

