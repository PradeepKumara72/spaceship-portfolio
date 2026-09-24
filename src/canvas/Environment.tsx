"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function SpaceEnvironment() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const texture = useTexture("/assets/hdri/space-nebula.jpeg");
  texture.mapping = THREE.EquirectangularReflectionMapping;

  // සෑම frame එකකදීම අභ්‍යවකාශ ගෝලය ඉතා සෙමින් කැරකැවීමට
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.015; // වේගය අවශ්‍ය නම් මෙතැනින් වෙනස් කළ හැක
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[60, 60, 40]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
}