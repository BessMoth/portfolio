"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <div className="h-screen w-screen">
    <Canvas>
      <OrbitControls/>
      <mesh>
        <cylinderGeometry args={[1, 1, 1]}/>
        <meshNormalMaterial/>
      </mesh>
      <directionalLight position={[0, 0, 5]} color="red" />
    </Canvas>
    </div>
  );
}
