import {
  OrbitControls,
  useAnimations,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

const Dog = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef()

  const model = useGLTF("/model/dog.drc.glb");
  const dog = useRef(model);

  useThree(({ camera, scene, gl }) => {
    camera.position.z = 0.45;
    gl.toneMapping = THREE.ReinhardToneMapping;
    gl.outputColorSpace = THREE.SRGBColorSpace;
  });

  const { actions } = useAnimations(model.animations, model.scene);

  useEffect(() => {
    actions["Take 001"].play();
  }, [actions]);

  const textures = useTexture({
    normalMap: "/dog_normals.jpg",
    sampleMatCap: "/matcap/mat-2.png",
  });

  textures.normalMap.flipY = false;
  textures.sampleMatCap.colorSpace = THREE.SRGBColorSpace;

  model.scene.traverse((child) => {
    if (child.name.includes("DOG")) {
      child.material = new THREE.MeshMatcapMaterial({
        normalMap: textures.normalMap,
        matcap: textures.sampleMatCap,
      });
    }
  });

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-1",
        endTrigger: "#section-3",
        // markers: true,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.to(dog.current.scene.position, {
      z: "-=0.5",
      y: "+=0.1",
    });
    tl.to(dog.current.scene.rotation, {
      x: `+=${Math.PI / 15}`,
    });
    tl.to(
      dog.current.scene.rotation,
      {
        y: `-=${Math.PI}`,
      },
      "third",
    );
    tl.to(
      dog.current.scene.position,
      {
        x: "-=0.45",
        z: "+=0.2",
      },
      "third",
    );
  }, []);


  return (
    <>
      <primitive
        ref={ref}
        object={model.scene}
        position={[0.2, -0.6, 0]}
        rotation={[0, 0.5, 0]}
      />
      <directionalLight position={[1, 1, 1]} intensity={10} color={0xffffff} />
      {/* <OrbitControls /> */}
    </>
  );
};

export default Dog;
