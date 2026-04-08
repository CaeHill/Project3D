import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// 3D Models
import { Table } from './components/3D/table/Table';
import { ChessBoard } from './components/3D/chess/ChessBoard';
import { ChessGame } from './components/3D/chess/ChessGame';

function App() {
  return (
    <div style={{width: '100vw', height: '100vh', background: '#f5f5f5'}}>
      <Canvas camera={{position: [1, 1, 1], fov: 50}}>
        
        <ambientLight intensity={1} />
        <pointLight position={[0, 1.5, 0]} intensity={10} />

        <Table />
        <ChessBoard
          position={[0, 0.3, 0]}
          texturePath="/textures/T_BoardGame_1.png"
        />

        <ChessGame
          texture1="/textures/T_BoardGame_1.png"
          texture2="/textures/T_BoardGame_2.png"
        />

        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App