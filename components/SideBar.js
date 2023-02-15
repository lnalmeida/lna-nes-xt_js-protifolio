import React from 'react'
import { RiCloseFill } from 'react-icons/ri'

const SideBar = ({isOpen, toggleSidebar}) => {
  return (
    <div className={`w-screen h-screen ${isOpen ? "fixed" : "hidden"} top-0 left-0 bg-gray-800 z-20 text-white grid place-items-center`}>
        <div className='absolute top-0 right-0 mr-[1.875rem] mt-[0.625rem] text-[1.5rem] hover:cursor-pointer' onClick={toggleSidebar}>
            <RiCloseFill />
        </div>
        
        <div className='flex flex-col gap-4 text-[1.75rem]'>
            <a onClick={toggleSidebar} className='hover:text-[#ff4d40]' href='#home'>Home</a>
            <a onClick={toggleSidebar} className='hover:text-[#ff4d40]' href='#about'>Sobre</a>
            <a onClick={toggleSidebar} className='hover:text-[#ff4d40]' href='#habilities'>Habilidades</a>
            <a onClick={toggleSidebar} className='hover:text-[#ff4d40]' href='#skills'>Skills</a>
            <a onClick={toggleSidebar} className='hover:text-[#ff4d40]' href='#projects'>Projetos</a>
            <a onClick={toggleSidebar} className='hover:text-[#ff4d40]' href='#contact'>Contato</a>
        </div>
    </div>
  );
};

export default SideBar;
