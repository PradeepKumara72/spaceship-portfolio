"use client";

import { useState, useMemo, useRef } from "react";
import * as THREE from "three";
import { Float, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { PROJECTS_DATA, Project } from "@/config/projects";
import { useModalStore } from "@/core/useModalStore";
import { useNavigationStore } from "@/core/useNavigationStore";
import { soundFX } from "@/hooks/useSoundFX";

function ProjectCard({ project, position }: { project: Project; position: [number, number, number] }) {
  const [hovered, setHovered] = useState(false);
  const openProjectModal = useModalStore((state) => state.openProjectModal);

  const borderGeometry = useMemo(() => {
    return new THREE.EdgesGeometry(new THREE.PlaneGeometry(2.3, 1.4));
  }, []);

  const handleClick = (e: any) => {
    e.stopPropagation();
    soundFX.playClick();
    openProjectModal(project);
  };

  const handleHoverIn = (e: any) => {
    e.stopPropagation();
    document.body.style.cursor = "pointer";
    setHovered(true);
    soundFX.playHover();
  };

  const handleHoverOut = () => {
    document.body.style.cursor = "auto";
    setHovered(false);
  };

  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.4}>
        <mesh
          onClick={handleClick}
          onPointerOver={handleHoverIn}
          onPointerOut={handleHoverOut}
          scale={hovered ? 1.05 : 1}
        >
          <planeGeometry args={[2.3, 1.4]} />
          <meshPhysicalMaterial
            color={hovered ? "#0369a1" : "#021c38"}
            transparent
            opacity={0.65}
            roughness={0.2}
            metalness={0.1}
            transmission={0.4}
            thickness={0.8}
          />
        </mesh>

        <lineSegments geometry={borderGeometry}>
          <lineBasicMaterial color={hovered ? "#00ffff" : "#0ea5e9"} linewidth={2} />
        </lineSegments>

        <Text
          position={[-0.95, 0.42, 0.05]}
          fontSize={0.09}
          color="#38bdf8"
          outlineWidth={0.005}
          outlineColor="#021c38"
          anchorX="left"
        >
          {project.category.toUpperCase()}
        </Text>

        <Text
          position={[-0.95, 0.18, 0.05]}
          fontSize={0.13}
          color="#ffffff"
          outlineWidth={0.006}
          outlineColor="#021c38"
          anchorX="left"
          maxWidth={1.9}
        >
          {project.title}
        </Text>

        <Text
          position={[-0.95, -0.15, 0.05]}
          fontSize={0.075}
          color="#cbd5e1"
          outlineWidth={0.004}
          outlineColor="#021c38"
          anchorX="left"
          maxWidth={1.9}
        >
          {project.shortDesc}
        </Text>

        <Text
          position={[-0.95, -0.45, 0.05]}
          fontSize={0.08}
          color={hovered ? "#38bdf8" : "#22d3ee"}
          outlineWidth={0.004}
          outlineColor="#021c38"
          anchorX="left"
        >
          {hovered ? ">> INITIALIZE DOSSIER (CLICK) <<" : "STATUS: READY"}
        </Text>
      </Float>
    </group>
  );
}

export default function ProjectsConsole() {
  const currentView = useNavigationStore((state) => state.currentView);
  const projectPage = useNavigationStore((state) => state.projectPage);
  const groupRef = useRef<THREE.Group>(null);

  const currentProjects = useMemo(() => {
    const start = projectPage * 2;
    return PROJECTS_DATA.slice(start, start + 2);
  }, [projectPage]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    // Hero view එකේදී පහළින්ද, Projects view එකේදී නියම Y: -0.45 ස්ථානයටද සුමටව ගමන් කරයි
    const targetY = currentView === "projects" ? -0.45 : -8.5;
    groupRef.current.position.y = THREE.MathUtils.damp(
      groupRef.current.position.y,
      targetY,
      3.5,
      delta
    );
  });

  return (
    <group ref={groupRef} position={[0, -8.5, 0]}>
      {currentProjects.map((proj, idx) => {
        const xOffset = idx === 0 ? -1.8 : 1.8;
        return <ProjectCard key={proj.id} project={proj} position={[xOffset, 0, 0.5]} />;
      })}
    </group>
  );
}