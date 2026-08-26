import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import React, { useRef, useLayoutEffect } from "react";
import * as THREE from "three";

const WatchModel = () => {
  const groupRef = useRef();
  // Load the GLTF scene
  const { scene } = useGLTF("/model/watch.glb");
  // Load the texture (ensure the path and extension are correct)
  const texture = useTexture("/model/texture/watch-texture.png");

  // Use useLayoutEffect to ensure the texture is applied before render
  useLayoutEffect(() => {
    if (!scene || !texture) return;
    texture.flipY = false;
    texture.colorSpace = THREE.SRGBColorSpace;

    // Ensure each mesh gets a MeshStandardMaterial with the texture if needed
    scene.traverse((child) => {
      if (child.isMesh) {
        // If the mesh doesn't have a standard material or has no map, set a new one
        if (
          !(child.material instanceof THREE.MeshStandardMaterial) ||
          !child.material
        ) {
          child.material = new THREE.MeshStandardMaterial({ map: texture });
        } else {
          // Some exported models may not use the 'map' property or may use multiple materials
          child.material.map = texture;
        }
        child.material.needsUpdate = true;
      }
    });
  }, [scene, texture]);

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={3} position={[0, 0, -0.35]} />
      <OrbitControls />
    </group>
  );
};

export default WatchModel;
