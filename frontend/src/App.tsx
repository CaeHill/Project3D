import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

// 3D Models
import { Table } from './components/3D/table/Table'
import { ChessBoard } from './components/3D/chess/ChessBoard'
import { ChessKing } from './components/3D/chess/ChessKing'
import { ChessQueen } from './components/3D/chess/ChessQueen'
import { ChessBishop } from './components/3D/chess/ChessBishop'
import { ChessKnight } from './components/3D/chess/ChessKnight'
import { ChessRook } from './components/3D/chess/ChessRook'
import { ChessPawn } from './components/3D/chess/ChessPawn'

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

        {/* King */}
        <ChessKing
          position={[0.025, 0.365, 0.19]}
          texturePath="/textures/T_BoardGame_1.png"
        />
        
        {/* Queen */}
        <ChessQueen 
          position={[-0.025, 0.365, 0.19]} 
          texturePath="/textures/T_BoardGame_1.png"
        />

        {/* Bishops */}
        <ChessBishop
          position={[0.08, 0.365, 0.19]}
          texturePath="/textures/T_BoardGame_1.png"
        />
        <ChessBishop
          position={[-0.08, 0.365, 0.19]}
          texturePath="/textures/T_BoardGame_1.png"
        />

        {/* Knights */}
        <ChessKnight
          position={[0.135, 0.365, 0.19]}
          texturePath="/textures/T_BoardGame_1.png"
          rotation={Math.PI}
        />
        <ChessKnight
          position={[-0.135, 0.365, 0.19]}
          texturePath="/textures/T_BoardGame_1.png"
          rotation={Math.PI}
        />

        {/* Rooks */}
        <ChessRook
          position={[0.19, 0.365, 0.19]}
          texturePath="/textures/T_BoardGame_1.png"
        />
        <ChessRook
          position={[-0.19, 0.365, 0.19]}
          texturePath="/textures/T_BoardGame_1.png"
        />

        {/* Pawns */}
        <ChessPawn 
          position={[0.025, 0.365, 0.135]}
          texturePath="/textures/T_BoardGame_1.png"
        />
        <ChessPawn 
          position={[-0.025, 0.365, 0.135]}
          texturePath="/textures/T_BoardGame_1.png"
        />
        <ChessPawn 
          position={[0.08, 0.365, 0.135]}
          texturePath="/textures/T_BoardGame_1.png"
        />
        <ChessPawn 
          position={[-0.08, 0.365, 0.135]}
          texturePath="/textures/T_BoardGame_1.png"
        />
        <ChessPawn 
          position={[0.135, 0.365, 0.135]}
          texturePath="/textures/T_BoardGame_1.png"
        />
        <ChessPawn 
          position={[-0.135, 0.365, 0.135]}
          texturePath="/textures/T_BoardGame_1.png"
        />
        <ChessPawn 
          position={[0.19, 0.365, 0.135]}
          texturePath="/textures/T_BoardGame_1.png"
        />
        <ChessPawn 
          position={[-0.19, 0.365, 0.135]}
          texturePath="/textures/T_BoardGame_1.png"
        />



        {/* King */}
        <ChessKing
          position={[0.025, 0.365, -0.19]}
          texturePath="/textures/T_BoardGame_2.png"
        />
        
        {/* Queen */}
        <ChessQueen 
          position={[-0.025, 0.365, -0.19]} 
          texturePath="/textures/T_BoardGame_2.png"
        />

        {/* Bishops */}
        <ChessBishop
          position={[0.08, 0.365, -0.19]}
          texturePath="/textures/T_BoardGame_2.png"
        />
        <ChessBishop
          position={[-0.08, 0.365, -0.19]}
          texturePath="/textures/T_BoardGame_2.png"
        />

        {/* Knights */}
        <ChessKnight
          position={[0.135, 0.365, -0.19]}
          texturePath="/textures/T_BoardGame_2.png"
          rotation={0}
        />
        <ChessKnight
          position={[-0.135, 0.365, -0.19]}
          texturePath="/textures/T_BoardGame_2.png"
          rotation={0}
        />

        {/* Rooks */}
        <ChessRook
          position={[0.19, 0.365, -0.19]}
          texturePath="/textures/T_BoardGame_2.png"
        />
        <ChessRook
          position={[-0.19, 0.365, -0.19]}
          texturePath="/textures/T_BoardGame_2.png"
        />

        {/* Pawns */}
        <ChessPawn 
          position={[0.025, 0.365, -0.135]}
          texturePath="/textures/T_BoardGame_2.png"
        />
        <ChessPawn 
          position={[-0.025, 0.365, -0.135]}
          texturePath="/textures/T_BoardGame_2.png"
        />
        <ChessPawn 
          position={[0.08, 0.365, -0.135]}
          texturePath="/textures/T_BoardGame_2.png"
        />
        <ChessPawn 
          position={[-0.08, 0.365, -0.135]}
          texturePath="/textures/T_BoardGame_2.png"
        />
        <ChessPawn 
          position={[0.135, 0.365, -0.135]}
          texturePath="/textures/T_BoardGame_2.png"
        />
        <ChessPawn 
          position={[-0.135, 0.365, -0.135]}
          texturePath="/textures/T_BoardGame_2.png"
        />
        <ChessPawn 
          position={[0.19, 0.365, -0.135]}
          texturePath="/textures/T_BoardGame_2.png"
        />
        <ChessPawn 
          position={[-0.19, 0.365, -0.135]}
          texturePath="/textures/T_BoardGame_2.png"
        />

        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App