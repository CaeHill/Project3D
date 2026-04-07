// 3D Models
import { ChessKing } from './ChessKing';
import { ChessQueen } from './ChessQueen';
import { ChessBishop } from './ChessBishop';
import { ChessKnight } from './ChessKnight';
import { ChessRook } from './ChessRook';
import { ChessPawn } from './ChessPawn';

const pieceDictionary = {
  King: ChessKing,
  Queen: ChessQueen,
  Bishop: ChessBishop,
  Knight: ChessKnight,
  Rook: ChessRook,
  Pawn: ChessPawn,
}

const generateInitialBoard = ({texture1, texture2}: {texture1: string, texture2: string}) => {
  const board = [];
  const backRowTypes = ['Rook', 'Knight', 'Bishop', 'Queen', 'King', 'Bishop', 'Knight', 'Rook'];

  for(let col = 0; col < 8; col++) {
      board.push({type: backRowTypes[col], texture: texture1, row: 0, col: col});
      board.push({type: 'Pawn', texture: texture1, row: 1, col: col});
  }

  for(let col = 0; col < 8; col++) {
    board.push({type: backRowTypes[col], texture: texture2, row: 7, col: col});
    board.push({type: 'Pawn', texture: texture2, row: 6, col: col});
  }

  return board;
};

export function ChessGame({texture1, texture2}: {texture1: string, texture2: string}) {
  const initialBoard = generateInitialBoard({texture1, texture2});

  const boardSizeX = 0.434;
  const boardSizeZ = 0.426;
  const baseY = 0.365;

  return (
    <group>
      {initialBoard.map((element, index) => {
        const baseX = (element.col - 3.5) * boardSizeX/8;
        const baseZ = (element.row - 3.5) * boardSizeZ/8;
        const position = [baseX, baseY, baseZ] as [number, number, number];

        const rotation = (element.type === 'Knight' && element.texture === texture2) ? Math.PI : 0;
        
        const Piece = pieceDictionary[element.type as keyof typeof pieceDictionary];
        
        return (
          <Piece
            key={index}
            position={position}
            rotation={rotation}
            texturePath={element.texture}
          />
        )
      })}
    </group>
  )
}