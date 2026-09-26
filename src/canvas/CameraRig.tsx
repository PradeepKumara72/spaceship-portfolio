"use client";

import { useFrame } from "@react-three/fiber";
import { useNavigationStore } from "@/core/useNavigationStore";
import * as THREE from "three";
import { useRef } from "react";

export default function CameraRig() {
  const currentView = useNavigationStore((state) => state.currentView);
  const targetDistance = useRef(7.5);

  useFrame((state) => {
    // Hero view එකේදී කැමරා දුර 7.5, Projects view එකේදී කාඩ්පත් වෙත සමීපව 5.2
    targetDistance.current = currentView === "hero" ? 7.5 : 5.2;

    // කැමරාවේ දිශාවට බාධා නොකර දුර (radius) පමණක් සුමටව වෙනස් කරයි
    const currentPos = state.camera.position;
    const currentDist = currentPos.length();
    const newDist = THREE.MathUtils.lerp(currentDist, targetDistance.current, 0.05);

    if (currentDist > 0.001) {
      currentPos.multiplyScalar(newDist / currentDist);
    }
  });

  return null;
}