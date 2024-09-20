import React, { useState, useEffect } from 'react'; 
import Chessboard from 'chessboardjsx'; 
import { io } from 'socket.io-client';
import { Chess } from 'chess.js';

const socket = io('http://localhost:5000'); // Connect to the backend

function ChessGame() {
  const [gameState, setGameState] = useState({
    fen: 'start',
    history: [],
    isWhiteTurn: true,
  });

  const [whiteTime, setWhiteTime] = useState(0);
  const [blackTime, setBlackTime] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);
  const chess = new Chess();

  useEffect(() => {
    let interval;
    if (isGameActive) {
      interval = setInterval(() => {
        if (gameState.isWhiteTurn) {
          setBlackTime(prev => prev + 1);
        } else {
          setWhiteTime(prev => prev + 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [gameState.isWhiteTurn, isGameActive]);

  useEffect(() => {
    socket.on('gameState', (newGameState) => {
      setGameState(newGameState);
      if (!isGameActive) setIsGameActive(true);
    });

    return () => {
      socket.off('gameState');
    };
  }, [isGameActive]);

  const onDrop = ({ sourceSquare, targetSquare }) => {
    const move = chess.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q' // always promote to a queen for simplicity
    });

    // Check if the move is legal
    if (move) {
      const newFEN = chess.fen();
      const newGameState = {
        ...gameState,
        fen: newFEN,
        history: [...gameState.history, move],
        isWhiteTurn: !gameState.isWhiteTurn,
      };
      
      setGameState(newGameState);
      socket.emit('makeMove', newGameState);
    }
  };

  return (
    <div className='flex justify-center items-center h-full w-full'>
      <div className='bg-slate-800 w-full h-full rounded-md shadow-lg px-8 py-4 flex flex-col'>
        <h1 className='text-2xl text-white text-center mb-4'>𝕻𝖆𝖜𝖓 𝖙𝖔 𝕶𝖎𝖓𝖌</h1>
        <div className='flex flex-row justify-between'>
          <div className='text-white text-center w-auto px-2'>
            Light Emperor
            <img src='https://www.chess.com/bundles/web/images/white_400.png' className='w-20 rounded my-4 mx-auto' />
            <div className='text-xl'>{whiteTime}s</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <Chessboard
              position={gameState.fen}
              onDrop={onDrop}
            />
          </div>
          <div className='text-white text-center w-auto'>
            Dark Emperor
            <img src='https://www.chess.com/bundles/web/images/black_400.png' className='w-20 rounded my-4 mx-auto' />
            <div className='text-xl'>{blackTime}s</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChessGame;
