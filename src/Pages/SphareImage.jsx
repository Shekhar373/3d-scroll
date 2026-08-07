import { Canvas } from '@react-three/fiber'
import React from 'react'
import ImageSphere from '../r3f/Sphare'
import { OrbitControls } from '@react-three/drei'

const SphareImage = () => {
  return (
    <div className='h-screen w-full bg-white'>
        <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
            <OrbitControls enableZoom={false} />
            <ImageSphere />
        </Canvas>
   
    </div>
  )
}

export default SphareImage