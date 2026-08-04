import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

interface ProtocolCore3DProps {
  reducedMotion: boolean;
}

const stageColors = [0x5b083f, 0x22141f, 0x00d982, 0xf4f4f4, 0x1757cc, 0x5b083f];

function ProtocolAssembly({ reducedMotion }: ProtocolCore3DProps) {
  const assembly = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);
  const positions = useMemo(
    () => [
      [-1.45, 1.05, 0.1],
      [-0.92, 0.43, 0.32],
      [-0.34, -0.08, 0.65],
      [0.34, 0.05, 0.58],
      [0.92, 0.55, 0.25],
      [1.44, 1.1, 0],
    ] as [number, number, number][],
    [],
  );

  useFrame((state, delta) => {
    if (!assembly.current || !core.current) return;
    const targetX = reducedMotion ? -0.08 : -0.08 + state.pointer.y * 0.08;
    const targetY = reducedMotion ? -0.28 : -0.28 + state.pointer.x * 0.16;
    assembly.current.rotation.x = THREE.MathUtils.damp(assembly.current.rotation.x, targetX, 4, delta);
    assembly.current.rotation.y = THREE.MathUtils.damp(assembly.current.rotation.y, targetY, 4, delta);
    if (!reducedMotion) {
      core.current.rotation.y += delta * 0.28;
      assembly.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.35) * 0.025;
    }
  });

  return (
    <group ref={assembly} position={[0, -0.25, 0]}>
      <mesh ref={core} position={[0, -0.35, 0]}>
        <octahedronGeometry args={[0.72, 0]} />
        <meshStandardMaterial color={0x00d982} roughness={0.28} metalness={0.18} />
      </mesh>

      <mesh rotation={[Math.PI / 2.25, 0.1, 0]}>
        <torusGeometry args={[1.42, 0.025, 8, 96]} />
        <meshStandardMaterial color={0x1757cc} roughness={0.22} metalness={0.62} />
      </mesh>
      <mesh rotation={[Math.PI / 2.7, 0.75, 0.2]}>
        <torusGeometry args={[1.82, 0.018, 8, 96]} />
        <meshStandardMaterial color={0x5b083f} roughness={0.36} metalness={0.35} />
      </mesh>

      {positions.map((position, index) => (
        <mesh key={index} position={position} rotation={[0.12, -0.24 + index * 0.08, 0]}>
          <boxGeometry args={[0.72, 0.22, 0.72]} />
          <meshStandardMaterial
            color={stageColors[index]}
            roughness={index === 4 ? 0.24 : 0.38}
            metalness={index === 4 ? 0.58 : 0.12}
          />
        </mesh>
      ))}

      <mesh position={[0, -1.58, -0.35]} rotation={[0, 0, 0]}>
        <boxGeometry args={[3.8, 0.05, 1.35]} />
        <meshStandardMaterial color={0x20171f} roughness={0.78} metalness={0.06} />
      </mesh>
    </group>
  );
}

function CoreFallback() {
  return (
    <div className="core-fallback" aria-hidden="true">
      {stageColors.map((color, index) => (
        <span key={color + index} style={{ '--fallback-color': `#${color.toString(16).padStart(6, '0')}` } as React.CSSProperties} />
      ))}
    </div>
  );
}

export default function ProtocolCore3D({ reducedMotion }: ProtocolCore3DProps) {
  return (
    <Canvas
      className="protocol-canvas"
      camera={{ position: [0, 0.2, 5.8], fov: 38 }}
      dpr={[1, 1.5]}
      frameloop={reducedMotion ? 'demand' : 'always'}
      fallback={<CoreFallback />}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={1.65} />
      <directionalLight position={[3, 4, 5]} intensity={3.2} color={0xffffff} />
      <directionalLight position={[-4, -1, 2]} intensity={1.1} color={0x95b9ff} />
      <ProtocolAssembly reducedMotion={reducedMotion} />
    </Canvas>
  );
}

