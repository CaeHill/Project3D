import { useGLTF } from '@react-three/drei';

export function ChessQueen({position}: {position: [number, number, number]}) {
  const {scene} = useGLTF('/models/chess/ChessQueen.glb');

  return (
    <primitive
      object={scene.clone()}
      position={position}
    />
  )
}