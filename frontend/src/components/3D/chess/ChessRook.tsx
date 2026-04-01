import { useGLTF } from '@react-three/drei';

export function ChessRook({position}: {position: [number, number, number]}) {
  const {scene} = useGLTF('/models/chess/ChessRook.glb');

  return (
    <primitive
      object={scene.clone()}
      position={position}
    />
  )
}