import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ExternalLink, Github, Layers, Code as CodeIcon, Lightbulb, CheckCircle, AlertTriangle } from 'lucide-react'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { projects } from '../data/projects'

export const ProjectDetailsPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const project = projects.find(p => p.id === id)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (!project) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
                    <button
                        onClick={() => navigate('/projects')}
                        className="text-astral-blue hover:text-white transition-colors"
                    >
                        Back to Projects
                    </button>
                </div>
            </div>
        )
    }

    const Icon = project.icon

    return (
        <div className="min-h-screen bg-gray-900 text-white selection:bg-astral-blue/30 selection:text-white">
            {/* Background Elements */}
            <div className={`fixed top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br ${project.bgGradient} blur-[100px] opacity-20 pointer-events-none`} />

            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-white/10">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold"
                    >
                        <ArrowLeft size={16} /> Back
                    </button>
                    <div className="text-astral-blue font-bold tracking-[0.2em] text-sm uppercase">
                        Project Details
                    </div>
                </div>
            </nav>

            <main className="container mx-auto px-6 pt-32 pb-20">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto mb-20"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${project.color}`}>
                            <Icon size={32} />
                        </div>
                        <div>
                            <div className={`text-sm font-bold tracking-widest uppercase ${project.color} mb-1`}>
                                {project.role}
                            </div>
                            <h1 className="text-5xl md:text-7xl font-outfit font-bold text-white uppercase leading-tight">
                                {project.title}
                            </h1>
                        </div>
                    </div>

                    <p className="text-xl text-gray-300 leading-relaxed max-w-2xl border-l-4 border-white/10 pl-6 my-8">
                        {project.shortDescription || project.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {project.tags.map((tag, i) => (
                            <span key={i} className="px-4 py-2 border border-white/10 rounded-full text-sm text-gray-300 font-medium tracking-wide">
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Content Grid */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Overview & Problem */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 rounded-3xl p-8"
                        >
                            <h3 className="flex items-center gap-3 text-2xl font-outfit font-bold text-white mb-6">
                                <Layers className="text-astral-blue" /> Overview
                            </h3>
                            <div className="prose prose-invert max-w-none">
                                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                                    {project.overview}
                                </p>

                                {/* Problem Statement */}
                                {project.problemStatement && (
                                    <div className="mb-10 p-6 rounded-2xl bg-white/5 border border-white/10">
                                        <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                            <div className={`w-1.5 h-5 rounded-full ${project.color.replace('text-', 'bg-')}`} />
                                            {project.problemStatement.title}
                                        </h4>
                                        <p className="text-gray-400 leading-relaxed">
                                            {project.problemStatement.description}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </motion.section>

                        {/* Implementation Phases */}
                        {project.implementation && (
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white/5 border border-white/10 rounded-3xl p-8"
                            >
                                <h3 className="flex items-center gap-3 text-2xl font-outfit font-bold text-white mb-8">
                                    <CodeIcon className="text-astral-blue" /> Implementation
                                </h3>
                                <div className="space-y-8">
                                    {project.implementation.map((phase, index) => (
                                        <div key={index} className="relative pl-8 border-l border-white/10">
                                            <div className={`absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-black border border-white/20`} />
                                            <h4 className="text-lg font-bold text-white mb-3">{phase.phase}</h4>
                                            <ul className="space-y-2">
                                                {phase.details.map((detail, i) => (
                                                    <li key={i} className="text-gray-400 text-sm leading-relaxed flex items-start gap-3">
                                                        <span className="text-white/20 mt-1.5">•</span>
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </motion.section>
                        )}

                        {/* Architecture */}
                        {project.architecture && (
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white/5 border border-white/10 rounded-3xl p-8"
                            >
                                <h3 className="flex items-center gap-3 text-2xl font-outfit font-bold text-white mb-6">
                                    <Layers className="text-astral-blue" /> Architecture
                                </h3>
                                <div className="p-5 rounded-xl bg-black/40 border border-white/10 font-mono text-sm text-astral-blue whitespace-pre-wrap leading-relaxed shadow-inner">
                                    {project.architecture}
                                </div>
                            </motion.section>
                        )}

                        {/* Challenges & Outcomes */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Challenges */}
                            {project.challenges && (
                                <motion.section
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white/5 border border-white/10 rounded-3xl p-6"
                                >
                                    <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
                                        <AlertTriangle size={20} className="text-red-400" /> Challenges
                                    </h3>
                                    <ul className="space-y-3">
                                        {project.challenges.map((challenge, index) => (
                                            <li key={index} className="text-gray-400 text-sm leading-relaxed flex items-start gap-2">
                                                <span className="text-red-400/50 mt-1 text-xs">●</span>
                                                <span>{challenge}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.section>
                            )}

                            {/* Outcomes */}
                            {project.outcomes && (
                                <motion.section
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white/5 border border-white/10 rounded-3xl p-6"
                                >
                                    <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
                                        <CheckCircle size={20} className="text-emerald-400" /> Outcomes
                                    </h3>
                                    <ul className="space-y-3">
                                        {project.outcomes.map((outcome, index) => (
                                            <li key={index} className="text-gray-400 text-sm leading-relaxed flex items-start gap-2">
                                                <span className="text-emerald-400/50 mt-1 text-xs">●</span>
                                                <span>{outcome}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.section>
                            )}
                        </div>

                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Project Links */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 rounded-3xl p-8"
                        >
                            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Links</h3>
                            <div className="space-y-4">
                                <a href="https://github.com/Bablusinghnirwan" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-astral-blue/50 transition-all group">
                                    <span className="flex items-center gap-3 text-gray-300 group-hover:text-white">
                                        <Github size={20} /> Repository
                                    </span>
                                    <ExternalLink size={16} className="text-gray-500 group-hover:text-astral-blue" />
                                </a>

                                <a href="#" className="flex items-center justify-between w-full p-4 bg-astral-blue/10 border border-astral-blue/20 rounded-xl hover:bg-astral-blue/20 transition-all group">
                                    <span className="flex items-center gap-3 text-astral-blue font-bold">
                                        <ExternalLink size={20} /> Live Demo
                                    </span>
                                    <ArrowRight size={16} className="text-astral-blue group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </motion.div>

                        {/* Tech Stack */}
                        {project.techStackDetails && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-white/5 border border-white/10 rounded-3xl p-8"
                            >
                                <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Tech Stack</h3>
                                <div className="space-y-6">
                                    {project.techStackDetails.map((stack, index) => (
                                        <div key={index}>
                                            <div className="text-xs text-gray-500 uppercase tracking-widest mb-3 font-semibold">{stack.category}</div>
                                            <div className="flex flex-wrap gap-2">
                                                {stack.items.map((item, i) => (
                                                    <span key={i} className="px-3 py-1.5 bg-white/5 rounded-lg text-xs text-gray-300 border border-white/5">
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Key Insights */}
                        {project.keyInsights && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-gradient-to-br from-astral-blue/20 to-transparent border border-astral-blue/30 rounded-3xl p-8"
                            >
                                <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-6 uppercase tracking-wider">
                                    <Lightbulb size={20} className="text-yellow-400" /> Insights
                                </h3>
                                <ul className="space-y-4">
                                    {project.keyInsights.map((insight, index) => (
                                        <li key={index} className="text-gray-300 text-sm italic relative pl-4 border-l-2 border-white/20">
                                            "{insight}"
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}

                    </div>
                </div>
            </main>
        </div>
    )
}
