"use client"
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";

const RotatingImage=()=> {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  const texture = useLoader(TextureLoader, "/cube.png"); // Ensure path is correct

  return (
    <Canvas>
      <ambientLight />
      <mesh ref={meshRef}>
        <planeGeometry args={[3, 3]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </Canvas>
  );
}

export default RotatingImage