import { Suspense, useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'

import { inSphere } from 'maath/random/dist/maath-random.esm'

const Stars = () => {
   const ref = useRef()

   const [sphere] = useState(() => inSphere(new Float32Array(6000), { radius: 1.2 }))

   useFrame((state, delta) => {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
   })

   return (
      <group rotation={[0, 0, Math.PI / 4]}>
         <Points ref={ref} positions={sphere} stride={3} frustumCulled>
            <PointMaterial
               transparent
               color='#f272c8'
               size={0.002}
               sizeAttenuation={true}
               deepWrite={false}
            />
         </Points>
      </group>
   )
}

const StarsCanvas = () => (
   <div className='absolute inset-0 h-auto w-full z-[-1]'>
      <Canvas
         camera={{ position: [0, 0, 1] }}
         gl={{ preserveDrawingBuffer: true }}
      >
         <Suspense fallback={null}>
            <Stars />
         </Suspense>

         <Preload all />
      </Canvas>
   </div>
)

export default StarsCanvas
