import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Starfield } from './Starfield'
import { ShootingStars } from './ShootingStars'
import { FloatingShapes } from './FloatingShapes'
import { OrbitControls } from '@react-three/drei'

export const CanvasContainer = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10">
            <Canvas
                camera={{ position: [0, 0, 1] }}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.2} />
                    <pointLight position={[10, 10, 10]} intensity={1.5} color="#00ffff" />
                    <Starfield />
                    <ShootingStars />
                    <FloatingShapes />
                    {/* We can add more 3D elements here */}
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
                </Suspense>
            </Canvas>
        </div>
    )
}
