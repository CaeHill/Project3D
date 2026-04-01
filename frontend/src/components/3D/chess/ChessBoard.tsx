import { useGLTF } from '@react-three/drei'

export function ChessBoard() {
  const {scene} = useGLTF('/models/chess/ChessBoard.glb');

  return (
    <primitive
      object={scene}
      position={[0, 0.3, 0]}
    />
  )
}