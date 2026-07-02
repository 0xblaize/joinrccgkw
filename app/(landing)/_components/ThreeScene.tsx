"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";

function Knot() {
  const group = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.x += delta * 0.18;
    group.current.rotation.y += delta * 0.24;
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshBasicMaterial color="#a81e4f" wireframe transparent opacity={0.9} />
      </mesh>
      <mesh scale={1.02}>
        <icosahedronGeometry args={[1.35, 0]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.18} />
      </mesh>
      <mesh scale={0.55}>
        <icosahedronGeometry args={[1.35, 0]} />
        <meshBasicMaterial color="#7b1e3a" wireframe transparent opacity={0.55} />
      </mesh>
    </group>
  );
}

export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3.6], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 2]}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.5} />
      <Knot />
    </Canvas>
  );
}
