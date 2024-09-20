import React from 'react';
import { MdAddBox } from "react-icons/md";
import { BiSolidChess } from "react-icons/bi";
import { MdSupervisorAccount } from "react-icons/md";

function Scoreboard() {
  return (
    <div className='bg-zinc-800 w-60 h-full p-4 rounded-lg shadow-lg flex flex-col justify-between'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl font-bold text-white'>Scoreboard</h2>
      </div>
      
      {/* Action Buttons */}
      <div className='flex justify-between'>
        <button className='bg-slate-900 px-4 py-2 rounded-md hover:bg-slate-700 transition duration-200'>
          <MdAddBox className="text-white" />
        </button>
        <button className='bg-slate-900 px-4 py-2 rounded-md hover:bg-slate-700 transition duration-200'>
          <BiSolidChess className="text-white" />
        </button>
        <button className='bg-slate-900 px-4 py-2 rounded-md hover:bg-slate-700 transition duration-200'>
          <MdSupervisorAccount className="text-white" />
        </button>
      </div>

      {/* Placeholder for Score Display */}
      <div className='flex-grow mt-4'>
        <div className='bg-zinc-700 h-24 flex items-center justify-center rounded-md'>
          <span className='text-xl font-semibold text-[#d4af37]'>Player 1: 0</span>
        </div>
        <div className='bg-zinc-700 h-24 flex items-center justify-center rounded-md mt-2'>
          <span className='text-xl font-semibold text-[#d4af37]'>Player 2: 0</span>
        </div>
      </div>
      
      <button className='bg-[#d4af37] py-2 rounded-lg text-black font-semibold hover:bg-[#b39b2d] transition duration-200 mt-4'>
        Reset Score
      </button>
      <p className='mt-auto text-zinc-500'>Devloped By Sadiq Ahmed Killedar </p>
    </div>
  );
}

export default Scoreboard;
