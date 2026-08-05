import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

interface Props { reducedMotion: boolean }

function Constellation({ reducedMotion }: Props) {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current || reducedMotion) return;
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, state.pointer.x * 0.16, 3, delta);
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, -state.pointer.y * 0.1, 3, delta);
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.55) * 0.06;
  });

  const nodes: [number, number, number][] = [[-1.45, 0.85, 0], [1.25, 0.85, -0.2], [0.05, -0.75, 0.45]];

  return (
    <group ref={group} rotation={[-0.06, -0.14, 0]}>
      <mesh rotation={[0, 0, -0.32]}>
        <torusGeometry args={[1.25, 0.024, 10, 96, Math.PI * 1.5]} />
        <meshStandardMaterial color={0xf6f7f8} roughness={0.3} metalness={0.2} />
      </mesh>
      {nodes.map((position, index) => (
        <group key={index} position={position}>
          <mesh>
            {index === 0 ? <boxGeometry args={[0.58, 0.58, 0.58]} /> : index === 1 ? <octahedronGeometry args={[0.46, 0]} /> : <icosahedronGeometry args={[0.48, 1]} />}
            <meshStandardMaterial color={index === 1 ? 0x39ff14 : 0x0b0f14} roughness={0.34} metalness={index === 2 ? 0.62 : 0.18} />
          </mesh>
          <mesh scale={1.3}>
            <sphereGeometry args={[0.48, 24, 24]} />
            <meshBasicMaterial color={0xffffff} transparent opacity={0.08} wireframe />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export default function ToolConstellation3D({ reducedMotion }: Props) {
  return (
    <Canvas camera={{ position: [0, 0, 5.4], fov: 42 }} dpr={[1, 1.5]} frameloop={reducedMotion ? 'demand' : 'always'} gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}>
      <ambientLight intensity={1.8} />
      <directionalLight position={[3, 4, 5]} intensity={3.4} color={0xffffff} />
      <directionalLight position={[-3, -2, 2]} intensity={1.2} color={0x39ff14} />
      <Constellation reducedMotion={reducedMotion} />
    </Canvas>
  );
}
