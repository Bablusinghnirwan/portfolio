import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const ShootingStar = () => {
    const ref = useRef()
    const [active, setActive] = useState(false)
    const speed = useRef(0)
    const startPos = useRef(new THREE.Vector3())
    const direction = useRef(new THREE.Vector3())

    useFrame((state, delta) => {
        if (!active) {
            if (Math.random() < 0.005) { // Chance to spawn
                setActive(true)
                speed.current = Math.random() * 10 + 10
                startPos.current.set(
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 20
                )
                direction.current.set(
                    Math.random() - 0.5,
                    Math.random() - 0.5,
                    Math.random() - 0.5
                ).normalize()

                if (ref.current) {
                    ref.current.position.copy(startPos.current)
                    ref.current.scale.set(1, 1, 1) // Reset scale
                }
            }
        } else {
            if (ref.current) {
                ref.current.position.addScaledVector(direction.current, speed.current * delta)
                // Fade out or shrink
                ref.current.scale.multiplyScalar(0.95)

                if (ref.current.scale.x < 0.01) {
                    setActive(false)
                }
            }
        }
    })

    return (
        <mesh ref={ref} visible={active}>
            <boxGeometry args={[0.05, 0.05, 2]} />
            <meshBasicMaterial color="#00ffff" transparent opacity={0.8} />
        </mesh>
    )
}

export const ShootingStars = () => {
    return (
        <group>
            {[...Array(10)].map((_, i) => (
                <ShootingStar key={i} />
            ))}
        </group>
    )
}
