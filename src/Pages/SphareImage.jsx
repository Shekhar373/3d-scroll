import { Canvas } from '@react-three/fiber'
import React from 'react'
import ImageSphere from '../r3f/Sphare'
import { OrbitControls } from '@react-three/drei'

const SphareImage = () => {
  return (
    <div className='h-screen w-full relative bg-white'>
      <h1 className='absolute bottom-2 left-2'>[Drag to see]</h1>
        <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        <OrbitControls
  enableZoom={false}
  minAzimuthAngle={-Infinity}
  maxAzimuthAngle={Infinity}
  minPolarAngle={0}
  maxPolarAngle={Math.PI}
/>
            <ImageSphere />
        </Canvas>
   
    </div>
  )
}

export default SphareImage