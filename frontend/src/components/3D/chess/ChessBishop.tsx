import { useGLTF } from '@react-three/drei';

export function ChessBishop({position}: {position: [number, number, number]}) {
  const {scene} = useGLTF('/models/chess/ChessBishop.glb');

  return (
    <primitive
      object={scene.clone()}
      position={position}
    />
  )
}