"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei";
import SpaceEnvironment from "./Environment";
import ProjectsConsole from "./models/ProjectsConsole";
import CameraRig from "./CameraRig";
import * as THREE from "three";

function HologramCore() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.4;
    meshRef.current.rotation.x += delta * 0.2;
  });

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={1.2}>
      <mesh ref={meshRef} position={[0, -0.45, -1.2]}>
        <octahedronGeometry args={[1.6, 0]} />
        <MeshDistortMaterial
          color="#00f0ff"
          emissive="#00b4d8"
          emissiveIntensity={2.2}
          wireframe
          distort={0.25}
          speed={2.5}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
}

export default function Scene() {
  return (
    <div className="absolute inset-0 z-0 bg-black">
      <Canvas camera={{ position: [0, 0, 7.5], fov: 60 }}>
        <ambientLight intensity={0.9} />
        <pointLight position={[10, 10, 10]} intensity={3} color="#00f0ff" />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#a855f7" />
        <pointLight position={[0, 0, 2]} intensity={2} color="#38bdf8" />

        <Suspense fallback={null}>
          <SpaceEnvironment />
          <HologramCore />
          <ProjectsConsole />
          <CameraRig />
        </Suspense>

        {/* Mouse එකෙන් උඩ, යට සහ සම්පූර්ණ 360 වටේටම කරකැවීමට OrbitControls සම්පූර්ණයෙන් නිදහස් කර ඇත */}
        <OrbitControls
          makeDefault
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.6}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}