import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Earth = () => {
   const earth = useGLTF('./planet/scene.gltf')

   return (
      <primitive object={earth.scene} scale={2.5} />
   )
}

const EarthCanvas = () => (
   <Canvas
      frameloop='demand'
      shadows
      camera={{
         fov: 45,
         near: 0.1,
         far: 200,
         position: [-4, 3, 6]
      }}
      gl={{ preserveDrawingBuffer: true }}
   >
      <Suspense fallback={<CanvasLoader />}>
         <OrbitControls
            autoRotate
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
         />
         <Earth />
      </Suspense>

      <Preload all />
   </Canvas>
)

export default EarthCanvas
