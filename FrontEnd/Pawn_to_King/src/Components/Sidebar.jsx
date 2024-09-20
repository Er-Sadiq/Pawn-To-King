import React, { useState } from 'react';
import { RiArrowRightDoubleFill, RiArrowLeftDoubleFill } from "react-icons/ri";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { LiaLanguageSolid } from "react-icons/lia";
import { SiLichess } from "react-icons/si";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { BsBinoculars } from "react-icons/bs";
import { CgMoreR } from "react-icons/cg";

function Sidebar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className={`h-screen flex flex-col justify-between bg-zinc-800 text-white transition-all duration-300 ${menu ? 'w-56' : 'w-20'}`}>
      
      {/* Toggle Button */}
      <button 
        onClick={toggleMenu} 
        className="text-white bg-[#d4af37] py-2 px-3 m-4 rounded-full hover:bg-[#b39b2d] self-end">
        {menu ? <RiArrowLeftDoubleFill size={24}/> : <RiArrowRightDoubleFill size={24}/>}
      </button>

      {/* Menu Items */}
      <ul className="flex flex-col items-center gap-4 mt-4">
        <li className="flex items-center gap-3 text-lg hover:text-[#d4af37]">
          <SiLichess size={24} />
          <span className={`whitespace-nowrap ${menu ? 'inline-block' : 'hidden'}`}>Play</span>
        </li>
        <li className="flex items-center gap-3 text-lg hover:text-[#d4af37]">
          <HiOutlinePuzzlePiece size={24} />
          <span className={`whitespace-nowrap ${menu ? 'inline-block' : 'hidden'}`}>Puzzles</span>
        </li>
        <li className="flex items-center gap-3 text-lg hover:text-[#d4af37]">
          <BsBinoculars size={24} />
          <span className={`whitespace-nowrap ${menu ? 'inline-block' : 'hidden'}`}>Watch</span>
        </li>
        <li className="flex items-center gap-3 text-lg hover:text-[#d4af37]">
          <CgMoreR size={24} />
          <span className={`whitespace-nowrap ${menu ? 'inline-block' : 'hidden'}`}>More</span>
        </li>
      </ul>

      {/* Footer Items */}
      <div className="flex flex-col items-center gap-3 mb-4">
        <span className="flex items-center gap-2 hover:text-[#d4af37]">
          <LiaLanguageSolid size={24} />
          <span className={`whitespace-nowrap ${menu ? 'inline-block' : 'hidden'}`}>English</span>
        </span>
        <span className="flex items-center gap-2 hover:text-[#d4af37]">
          <FaPersonCircleQuestion size={24} />
          <span className={`whitespace-nowrap ${menu ? 'inline-block' : 'hidden'}`}>Support</span>
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
