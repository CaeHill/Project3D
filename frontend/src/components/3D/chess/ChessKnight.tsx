import { useGLTF } from '@react-three/drei';

export function ChessKnight({position}: {position: [number, number, number]}) {
  const {scene} = useGLTF('/models/chess/ChessKnight.glb');

  return (
    <primitive
      object={scene.clone()}
      position={position}
    />
  )
}