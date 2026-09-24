"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei";
import SpaceEnvironment from "./Environment";
import ProjectsConsole from "./models/ProjectsConsole";
import CameraRig from "./CameraRig";

function HologramCore() {
  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1}>
      {/* Position Y අගය -0.45 දක්වා පහළට ගෙන කාඩ්පත් සමඟ සමපාත කර ඇත */}
      <mesh position={[0, -0.45, -1]}>
        <octahedronGeometry args={[1.1, 0]} />
        <MeshDistortMaterial
          color="#0284c7"
          emissive="#0369a1"
          emissiveIntensity={0.6}
          wireframe
          distort={0.2}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

export default function Scene() {
  return (
    <div className="absolute inset-0 z-0 bg-black">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#38bdf8" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#a855f7" />

        <Suspense fallback={null}>
          <SpaceEnvironment />
          <HologramCore />
          <ProjectsConsole />
          <CameraRig />
        </Suspense>

        <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.4} />
      </Canvas>
    </div>
  );
}