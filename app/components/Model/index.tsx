"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, useGLTF, Preload } from "@react-three/drei";
useGLTF.preload("/models/me.glb");

function Character() {
  const { scene } = useGLTF("/models/me.glb");

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <primitive object={scene} scale={3.5} position={[0, 0, 0]} />
    </Float>
  );
}

export default function Model() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 10, 5]} intensity={2.5} />

        {/* Rim lights to pop the model from dark background */}
        <spotLight position={[-10, 5, -10]} intensity={300} color="#ff8c00" />
        <spotLight position={[10, -5, -10]} intensity={300} color="#950DB7" />

        <Character />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
