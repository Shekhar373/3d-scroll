import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Model from "../r3f/Model";

const ModelParent = () => {
  return (
    <div>
      <div className="h-screen w-screen fixed top-0 z-10">
        <Canvas camera={{ position: [0, 0, 30] }}>
            <Model />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Environment preset="sunset" environmentIntensity={0.5} />
        </Canvas>
      </div>
    </div>
  );
};

export default ModelParent;
