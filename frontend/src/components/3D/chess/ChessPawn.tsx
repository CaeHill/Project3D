import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import type { ModelProps } from '../../../types/ModelProps'

type ChessGLTF = {
  nodes: {
    ChessPawn: THREE.Mesh;
  }
}

export function ChessPawn({position, texturePath}: ModelProps) {
  const {nodes} = useGLTF('/models/chess/ChessPawn.glb') as unknown as ChessGLTF;
  const texture = useTexture(texturePath) as THREE.Texture;

  return (
    <mesh 
      position={position}
      scale={0.01}
      rotation={[Math.PI / 2, 0, 0]}
      geometry={nodes.ChessPawn.geometry}
    >
      <meshStandardMaterial 
        map={texture}
        map-flipY={false}
        map-colorSpace={THREE.SRGBColorSpace}
      />
    </mesh>
  )
}