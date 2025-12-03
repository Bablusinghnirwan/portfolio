import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

const GeometricShape = ({ position, geometry, color, speed = 1, scale = 1 }) => {
    const meshRef = useRef()
    const [hovered, setHover] = useState(false)

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2 * speed
            meshRef.current.rotation.y += delta * 0.3 * speed
        }
    })

    return (
        <Float speed={2 * speed} rotationIntensity={1} floatIntensity={1}>
            <mesh
                ref={meshRef}
                position={position}
                scale={scale}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                {geometry}
                <meshStandardMaterial
                    color={hovered ? "#00ffff" : color}
                    wireframe
                    transparent
                    opacity={0.1}
                    side={THREE.DoubleSide}
                />
            </mesh>
        </Float>
    )
}

export const FloatingShapes = () => {
    return (
        <group>
            {/* Large Icosahedron - Background Feature */}
            <GeometricShape
                position={[-4, 2, -5]}
                geometry={<icosahedronGeometry args={[1, 1]} />}
                color="#ffffff"
                scale={2}
                speed={0.5}
            />

            {/* Torus Knot - Complex Geometry */}
            <GeometricShape
                position={[4, -2, -3]}
                geometry={<torusKnotGeometry args={[0.8, 0.2, 100, 16]} />}
                color="#00ffff"
                scale={1.5}
                speed={0.8}
            />

            {/* Octahedron - Sharp Edges */}
            <GeometricShape
                position={[0, 3, -8]}
                geometry={<octahedronGeometry args={[1]} />}
                color="#purple"
                scale={1.5}
                speed={0.6}
            />

            {/* Dodecahedron - Subtle Detail */}
            <GeometricShape
                position={[-3, -3, -4]}
                geometry={<dodecahedronGeometry args={[1]} />}
                color="#gray"
                scale={1.2}
                speed={0.4}
            />
        </group>
    )
}
