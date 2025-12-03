import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "../lib/utils"

export function SkillHover({ skills, className, ...props }) {
    const [hoveredSkill, setHoveredSkill] = React.useState(null)
    const [rotation, setRotation] = React.useState(0)
    const [clicked, setClicked] = React.useState(false)

    const animation = {
        scale: clicked ? [1, 1.3, 1] : 1,
        transition: { duration: 0.3 },
    }

    React.useEffect(() => {
        const handleClick = () => {
            setClicked(true)
            setTimeout(() => {
                setClicked(false)
            }, 200)
        }
        window.addEventListener("click", handleClick)
        return () => window.removeEventListener("click", handleClick)
    }, [clicked])

    return (
        <div
            className={cn("flex flex-wrap items-center justify-center gap-2", className)}
            {...props}
        >
            {skills.map((skill, index) => (
                <div
                    className={cn(
                        "relative cursor-pointer px-4 py-2 transition-opacity duration-200 border border-white/10 hover:border-astral-blue",
                        hoveredSkill && hoveredSkill !== skill.name
                            ? "opacity-50"
                            : "opacity-100"
                    )}
                    key={index}
                    onMouseEnter={() => {
                        setHoveredSkill(skill.name)
                        setRotation(Math.random() * 20 - 10)
                    }}
                    onMouseLeave={() => setHoveredSkill(null)}
                    onClick={() => {
                        setClicked(true)
                    }}
                >
                    <span className="block text-sm font-light text-gray-300 hover:text-white transition-colors duration-300 tracking-wide">{skill.name}</span>
                    <AnimatePresence>
                        {hoveredSkill === skill.name && (
                            <motion.div
                                className="absolute bottom-0 left-0 right-0 flex h-full w-full items-center justify-center pointer-events-none"
                                animate={animation}
                            >
                                <motion.img
                                    key={skill.name}
                                    src={skill.image}
                                    alt={skill.name}
                                    className="w-10 h-10 object-contain absolute -top-12 z-20"
                                    initial={{
                                        y: 10,
                                        rotate: rotation,
                                        opacity: 0,
                                        filter: "blur(2px)",
                                    }}
                                    animate={{ y: -20, opacity: 1, filter: "blur(0px)" }}
                                    exit={{ y: 10, opacity: 0, filter: "blur(2px)" }}
                                    transition={{ duration: 0.2 }}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    )
}
