import { useGLTF } from '@react-three/drei';

export function ChessPawn({position}: {position: [number, number, number]}) {
  const {scene} = useGLTF('/models/chess/ChessPawn.glb');

  return (
    <primitive
      object={scene.clone()}
      position={position}
    />
  )
}