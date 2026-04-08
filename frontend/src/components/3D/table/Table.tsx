import { useGLTF } from '@react-three/drei'

export function Table() {
  const {scene} = useGLTF('/models/table/Table.glb')

  return <primitive object={scene} />
}