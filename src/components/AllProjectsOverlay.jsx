import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight } from 'lucide-react'
import { projects } from '../data/projects'
import { useState } from 'react'

export const AllProjectsOverlay = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl overflow-y-auto"
                >
                    <div className="container mx-auto px-6 py-20 min-h-screen">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-16">
                            <div>
                                <h3 className="text-astral-blue text-sm font-bold tracking-[0.2em] uppercase mb-2">
                                    Portfolio
                                </h3>
                                <h2 className="text-4xl md:text-5xl font-outfit font-bold text-white uppercase">
                                    All Projects
                                </h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

const ProjectCard = ({ project }) => {
    const Icon = project.icon

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-astral-blue/50 transition-colors"
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`} />

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center ${project.color}`}>
                        <Icon size={24} />
                    </div>
                    <span className="text-white/20 font-outfit font-bold text-xl">
                        {project.id}
                    </span>
                </div>

                <div className={`text-xs font-bold tracking-widest uppercase ${project.color} mb-2`}>
                    {project.role}
                </div>

                <h3 className="text-2xl font-outfit font-bold text-white mb-4">
                    {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 text-[10px] border border-white/10 rounded-full text-gray-400 uppercase tracking-wider">
                            {tag}
                        </span>
                    ))}
                </div>

                <button className="flex items-center gap-2 text-white hover:text-astral-blue transition-colors text-sm font-bold uppercase tracking-widest group/btn">
                    View Details <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
            </div>
        </motion.div>
    )
}
