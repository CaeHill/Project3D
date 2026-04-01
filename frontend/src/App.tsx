import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

// 3D Models
import { Table } from './components/3D/table/Table' 
import { ChessBoard } from './components/3D/chess/ChessBoard'
import { ChessRook } from './components/3D/chess/ChessRook'
import { ChessBishop } from './components/3D/chess/ChessBishop'
import { ChessQueen } from './components/3D/chess/ChessQueen'
import { ChessKing } from './components/3D/chess/ChessKing'
import { ChessPawn } from './components/3D/chess/ChessPawn'
import { ChessKnight } from './components/3D/chess/ChessKnight'

function App() {
  return (
    <div style={{width: '100vw', height: '100vh', background: '#f5f5f5'}}>
      <Canvas camera={{position: [1, 1, 1], fov: 50}}>
        
        <ambientLight intensity={1} />
        <pointLight position={[0, 1.5, 0]} intensity={10} />

        <Table />
        <ChessBoard />

        {/* King */}
        <ChessKing position={[0.025, 0.365, 0.19]}/>
        
        {/* Queen */}
        <ChessQueen position={[-0.025, 0.365, 0.19]} />

        {/* Bishops */}
        <ChessBishop position={[0.08, 0.365, 0.19]} />
        <ChessBishop position={[-0.08, 0.365, 0.19]} />

        {/* Knights */}
        <ChessKnight position={[0.135, 0.365, 0.19]} />
        <ChessKnight position={[-0.135, 0.365, 0.19]} />

        {/* Rooks */}
        <ChessRook position={[0.19, 0.365, 0.19]} />
        <ChessRook position={[-0.19, 0.365, 0.19]} />

        {/* Pawns */}
        <ChessPawn position={[0.025, 0.365, 0.135]}/>
        <ChessPawn position={[-0.025, 0.365, 0.135]} />
        <ChessPawn position={[0.08, 0.365, 0.135]} />
        <ChessPawn position={[-0.08, 0.365, 0.135]} />
        <ChessPawn position={[0.135, 0.365, 0.135]} />
        <ChessPawn position={[-0.135, 0.365, 0.135]} />
        <ChessPawn position={[0.19, 0.365, 0.135]} />
        <ChessPawn position={[-0.19, 0.365, 0.135]} />

        {/* King */}
        <ChessKing position={[0.025, 0.365, -0.19]}/>
        
        {/* Queen */}
        <ChessQueen position={[-0.025, 0.365, -0.19]} />

        {/* Bishops */}
        <ChessBishop position={[0.08, 0.365, -0.19]} />
        <ChessBishop position={[-0.08, 0.365, -0.19]} />

        {/* Knights */}
        <ChessKnight position={[0.135, 0.365, -0.19]} />
        <ChessKnight position={[-0.135, 0.365, -0.19]} />

        {/* Rooks */}
        <ChessRook position={[0.19, 0.365, -0.19]} />
        <ChessRook position={[-0.19, 0.365, -0.19]} />

        {/* Pawns */}
        <ChessPawn position={[0.025, 0.365, -0.135]}/>
        <ChessPawn position={[-0.025, 0.365, -0.135]} />
        <ChessPawn position={[0.08, 0.365, -0.135]} />
        <ChessPawn position={[-0.08, 0.365, -0.135]} />
        <ChessPawn position={[0.135, 0.365, -0.135]} />
        <ChessPawn position={[-0.135, 0.365, -0.135]} />
        <ChessPawn position={[0.19, 0.365, -0.135]} />
        <ChessPawn position={[-0.19, 0.365, -0.135]} />

        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App