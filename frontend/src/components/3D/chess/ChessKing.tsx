import { useGLTF } from '@react-three/drei'

export function ChessKing({position}: {position: [number, number, number]}) {
  const {scene} = useGLTF('/models/chess/ChessKing.glb');

  return (
    <primitive
      object={scene.clone()}
      position={position}
    />
  )
}