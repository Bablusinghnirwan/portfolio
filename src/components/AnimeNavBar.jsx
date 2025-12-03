import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "../lib/utils"

export function AnimeNavBar({ items, className, defaultActive = "Home" }) {
    const [mounted, setMounted] = useState(false)
    const [hoveredTab, setHoveredTab] = useState(null)
    const [activeTab, setActiveTab] = useState(defaultActive)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of viewport
            threshold: 0
        }

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Find the item that corresponds to this section
                    const activeItem = items.find(item => item.url === `#${entry.target.id}`)
                    if (activeItem) {
                        setActiveTab(activeItem.name)
                    }
                }
            })
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions)

        items.forEach((item) => {
            const sectionId = item.url.replace('#', '')
            const element = document.getElementById(sectionId)
            if (element) {
                observer.observe(element)
            }
        })

        return () => observer.disconnect()
    }, [items])

    if (!mounted) return null

    return (
        <div className="fixed top-4 left-0 right-0 z-[9999]">
            <div className="flex justify-center pt-2">
                <motion.div
                    className="flex items-center gap-1 bg-black/50 border border-white/10 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg relative"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                    }}
                >
                    {items.map((item) => {
                        const Icon = item.icon
                        const isActive = activeTab === item.name
                        const isHovered = hoveredTab === item.name

                        return (
                            <a
                                key={item.name}
                                href={item.url}
                                onClick={(e) => {
                                    // e.preventDefault() // Allow default anchor behavior for scrolling
                                    setActiveTab(item.name)
                                }}
                                onMouseEnter={() => setHoveredTab(item.name)}
                                onMouseLeave={() => setHoveredTab(null)}
                                className={cn(
                                    "relative cursor-pointer text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300",
                                    "text-white/70 hover:text-white",
                                    isActive && "text-white"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        className="absolute inset-0 rounded-full -z-10 overflow-hidden"
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: [0.3, 0.5, 0.3],
                                            scale: [1, 1.03, 1]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-astral-blue/25 rounded-full blur-md" />
                                        <div className="absolute inset-[-4px] bg-astral-blue/20 rounded-full blur-xl" />
                                        <div className="absolute inset-[-8px] bg-astral-blue/15 rounded-full blur-2xl" />
                                        <div className="absolute inset-[-12px] bg-astral-blue/5 rounded-full blur-3xl" />

                                        <div
                                            className="absolute inset-0 bg-gradient-to-r from-astral-blue/0 via-astral-blue/20 to-astral-blue/0"
                                            style={{
                                                animation: "shine 3s ease-in-out infinite"
                                            }}
                                        />
                                    </motion.div>
                                )}

                                <motion.span
                                    className="hidden md:inline relative z-10"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {item.name}
                                </motion.span>
                                <motion.span
                                    className="md:hidden relative z-10"
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Icon size={14} strokeWidth={2.5} />
                                </motion.span>

                                <AnimatePresence>
                                    {isHovered && !isActive && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            className="absolute inset-0 bg-white/10 rounded-full -z-10"
                                        />
                                    )}
                                </AnimatePresence>

                                {isActive && (
                                    <motion.div
                                        layoutId="anime-mascot"
                                        className="absolute -top-8 left-1/2 -translate-x-1/2 pointer-events-none"
                                        initial={false}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30,
                                        }}
                                    >
                                        <div className="relative w-8 h-8">
                                            <motion.div
                                                className="absolute w-6 h-6 bg-white rounded-full left-1/2 -translate-x-1/2"
                                                animate={
                                                    hoveredTab ? {
                                                        scale: [1, 1.1, 1],
                                                        rotate: [0, -5, 5, 0],
                                                        transition: {
                                                            duration: 0.5,
                                                            ease: "easeInOut"
                                                        }
                                                    } : {
                                                        y: [0, -2, 0],
                                                        transition: {
                                                            duration: 2,
                                                            repeat: Infinity,
                                                            ease: "easeInOut"
                                                        }
                                                    }
                                                }
                                            >
                                                <motion.div
                                                    className="absolute w-1 h-1 bg-black rounded-full"
                                                    animate={
                                                        hoveredTab ? {
                                                            scaleY: [1, 0.2, 1],
                                                            transition: {
                                                                duration: 0.2,
                                                                times: [0, 0.5, 1]
                                                            }
                                                        } : {}
                                                    }
                                                    style={{ left: '25%', top: '40%' }}
                                                />
                                                <motion.div
                                                    className="absolute w-1 h-1 bg-black rounded-full"
                                                    animate={
                                                        hoveredTab ? {
                                                            scaleY: [1, 0.2, 1],
                                                            transition: {
                                                                duration: 0.2,
                                                                times: [0, 0.5, 1]
                                                            }
                                                        } : {}
                                                    }
                                                    style={{ right: '25%', top: '40%' }}
                                                />
                                                <motion.div
                                                    className="absolute w-1 h-0.5 bg-pink-300 rounded-full"
                                                    animate={{
                                                        opacity: hoveredTab ? 0.8 : 0.6
                                                    }}
                                                    style={{ left: '15%', top: '55%' }}
                                                />
                                                <motion.div
                                                    className="absolute w-1 h-0.5 bg-pink-300 rounded-full"
                                                    animate={{
                                                        opacity: hoveredTab ? 0.8 : 0.6
                                                    }}
                                                    style={{ right: '15%', top: '55%' }}
                                                />

                                                <motion.div
                                                    className="absolute w-2 h-1 border-b border-black rounded-full"
                                                    animate={
                                                        hoveredTab ? {
                                                            scaleY: 1.5,
                                                            y: -0.5
                                                        } : {
                                                            scaleY: 1,
                                                            y: 0
                                                        }
                                                    }
                                                    style={{ left: '30%', top: '60%' }}
                                                />
                                            </motion.div>
                                            <motion.div
                                                className="absolute -bottom-0.5 left-1/2 w-2 h-2 -translate-x-1/2"
                                                animate={
                                                    hoveredTab ? {
                                                        y: [0, -2, 0],
                                                        transition: {
                                                            duration: 0.3,
                                                            repeat: Infinity,
                                                            repeatType: "reverse"
                                                        }
                                                    } : {
                                                        y: [0, 1, 0],
                                                        transition: {
                                                            duration: 1,
                                                            repeat: Infinity,
                                                            ease: "easeInOut",
                                                            delay: 0.5
                                                        }
                                                    }
                                                }
                                            >
                                                <div className="w-full h-full bg-white rotate-45 transform origin-center" />
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                )}
                            </a>
                        )
                    })}
                </motion.div>
            </div>
        </div>
    )
}
