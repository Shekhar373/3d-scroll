import React from "react";
import WatchModel from "../r3f/WatchModel";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

const Watch = () => {
  return (
    <div className="h-screen w-full bg-gray-200">
      <Canvas camera={{ position: [0, 0, 0] }}>
        {/* <ambientLight intensity={0.5} /> */}
        {/* <directionalLight position={[5, 10, 7]} intensity={1} /> */}
        {/* Studio light setup: three point lights for a studio look */}
        {/* <pointLight position={[10, 10, 10]} intensity={1.2} />
        <pointLight position={[-10, 10, 10]} intensity={0.8} color="#f0eac0" />
        <pointLight position={[0, -10, 10]} intensity={0.5} color="#c0d8f0" /> */}
        {/* Use custom HDRI image for Environment */}
        <Environment 
          files="https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/2k/cyclorama_hard_light_2k.exr"
        //   background={true}
          environmentIntensity={1}
        />
        <WatchModel />
      </Canvas>
    </div>
  );
};

export default Watch;
