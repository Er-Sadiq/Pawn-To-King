import React from 'react';
import Sidebar from '../Components/Sidebar';
import Chessboard from '../Components/Chessboard';
import Scoreboard from '../Components/Scoreboard';

function Game() {
  return (
    <div className='h-screen w-screen bg-zinc-900 text-white overflow-hidden'>
      <div className='grid grid-cols-1 md:grid-cols-[auto,1fr,auto] h-full'>
        {/* Sidebar */}
        <Sidebar />

        {/* Chessboard */}
        <div className='flex justify-center items-center p-6'>
          <Chessboard />
        </div>

       
        <div className='flex justify-center items-center '>
          <Scoreboard />
        </div>
      </div>
    </div>
  );
}

export default Game;
