import { useGSAP } from "@gsap/react";
import { useGLTF, useTexture } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import * as THREE from "three";
import React, { useRef, useEffect } from "react";

const Model = ()=> {
  const groupRef = useRef();
  // Load GLTF scene and texture
  const { scene } = useGLTF("/model/greek_model.glb");
  const texture = useTexture("/model/texture/marble_bust_01_diff_4k.jpg");

  // Prepare texture
  useEffect(() => {
    if (!texture) return;
    texture.flipY = false;
    texture.colorSpace = THREE.SRGBColorSpace;
  }, [texture]);
  
  // Assign texture to scene meshes (only once)
  useEffect(() => {
    if (!scene || !texture) return;
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.map = texture;
        child.material.needsUpdate = true;
      }
    });
  }, [scene, texture]);

  // Animate model position on scroll
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!scene) return;

    // Use the group container if provided
    const target = groupRef.current || scene;

    gsap.to(target.rotation, {
      y: `+=${Math.PI * 2}`,
      scrollTrigger: {
        trigger: "#scroll",
        // endTrigger: "#section-4",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        // markers: true, // Hide markers for production
      },
    });
  }, [scene]);

  return (
    <group ref={groupRef}>
      <primitive
        object={scene}
        scale={1}
        position={[0, -34, 0]}
      />
    </group>
  );
}

export default Model