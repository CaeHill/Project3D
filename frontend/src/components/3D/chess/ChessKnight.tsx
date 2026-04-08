import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import type { ModelProps } from '../../../types/ModelProps'

type ChessGLTF = {
  nodes: {
    ChessKnight: THREE.Mesh;
  }
}

export function ChessKnight({position, texturePath, rotation = 0}: ModelProps) {
  const {nodes} = useGLTF('/models/chess/ChessKnight.glb') as unknown as ChessGLTF;
  const texture = useTexture(texturePath) as THREE.Texture;

  return (
    <mesh
      position={position}
      scale={0.01}
      rotation={[Math.PI / 2, 0, rotation]}
      geometry={nodes.ChessKnight.geometry}
    >
      <meshStandardMaterial
        map={texture}
        map-flipY={false}
        map-colorSpace={THREE.SRGBColorSpace}
      />
    </mesh>
  )
}