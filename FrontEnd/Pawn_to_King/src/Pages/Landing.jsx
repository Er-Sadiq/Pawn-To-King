import React from 'react';
import logo from '../assets/pawn-to-king.jpg';
import s1 from '../assets/s1.jpg';
import s2 from '../assets/s2.jpg';
import s3 from '../assets/s3.jpg';
import { useNavigate } from 'react-router-dom';

function Landing() {
 
  const negvigate = useNavigate();

  return (
    <div className='bg-zinc-900 h-full w-full min-h-screen overflow-hidden flex flex-col justify-center items-center p-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full p-4'>
        

        <div className='flex justify-center items-center my-10'>
          <img 
            src={logo} 
            alt="Chess Logo" 
            className='w-80 md:w-80 border-2 border-[#C0C0C0] rounded-md shadow-lg transition-transform transform hover:scale-105' 
          />
        </div>

        
        <div className='flex flex-col justify-center text-center md:text-left text-white'>
          <h1 className='text-5xl md:text-6xl font-black mb-6'>
            𝕻𝖆𝖜𝖓 𝖙𝖔 𝕶𝖎𝖓𝖌
          </h1>
          <h2 className='text-3xl md:text-4xl font-extrabold mb-6'>
            Play Chess Online On The World's #2 Site!
          </h2>
          <div className='mt-4'>
            <button onClick={()=>negvigate("/game")} className='text-lg py-3 px-6 bg-[#d4af37] rounded-lg hover:bg-[#b39b2d] transition duration-200'>
              Play Online!
            </button>
          </div>
        </div>
      </div>

     
      <div className='bg-zinc-800 rounded-lg shadow-lg p-4 flex justify-center gap-4 mt-8 w-full max-w-md  ml-auto'>
        <img 
          src={s1} 
          alt="Chess Image 1" 
          className='w-24 h-24 md:w-32 md:h-32 object-cover rounded-md shadow-md' 
        />
        <img 
          src={s2} 
          alt="Chess Image 2" 
          className='w-24 h-24 md:w-32 md:h-32 object-cover rounded-md shadow-md' 
        />
        <img 
          src={s3} 
          alt="Chess Image 3" 
          className='w-24 h-24 md:w-32 md:h-32 object-cover rounded-md shadow-md' 
        />
      </div>
    </div>
  );
}

export default Landing;
