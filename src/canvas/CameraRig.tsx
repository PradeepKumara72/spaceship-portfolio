"use client";

import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useNavigationStore } from "@/hooks/useCameraRig";

export default function CameraRig() {
  const { camera } = useThree();
  const currentView = useNavigationStore((state) => state.currentView);

  useEffect(() => {
    if (currentView === "projects") {
      // Projects View එකට කැමරාව Zoom කර ඉදිරියට ගෙන යාම
      gsap.to(camera.position, {
        x: 0,
        y: 0,
        z: 2.8,
        duration: 2,
        ease: "power3.inOut",
      });
    } else {
      // නැවත Hero View එකට කැමරාව රැගෙන ඒම
      gsap.to(camera.position, {
        x: 0,
        y: 0,
        z: 5,
        duration: 2,
        ease: "power3.inOut",
      });
    }
  }, [currentView, camera]);

  return null;
}