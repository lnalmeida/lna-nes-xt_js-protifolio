import React, { useState, useEffect }from 'react';
import ReactDOM from 'react-dom';
import { RiCloseFill } from 'react-icons/ri';

export const Modal = ({ isOpen, toggle}) => {

    useEffect(() => {
        const listener = function (e) {
            if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
              e.preventDefault();
              e.stopPropagation();
      
              isOpen && toggle();
            }
          }
      
          window.addEventListener('keyup', listener)
      
          return (() => {
            window.removeEventListener('keyup', listener)
          })
      
    }, [isOpen, toggle]);




  return ( isOpen ? ReactDOM.createPortal(
    <div className='flex flex-col absolute mt-[-26.2rem] drop-shadow-md ml-2  z-10 bg-white border border-[#ff4d41] text-[#ff4d41] rounded-[5px] h-[180px] w-[300px] inset-x-3/4 inset-y-2/3'>
        <div className='flex items-center justify-end px-2 py-2 text-[#ff4d41]'>
            <RiCloseFill size={24} onClick={toggle} />
        </div>
        <div className='flex items-center  font-medium justify-center py-4 mt-[-1rem] mb-[-2rem]'>
            <h3 className='text-[#ff4d41]  text-xl font-medium'>
                Selecione o idioma: 
            </h3>
        </div>
        <div className='flex gap-4 items-center justify-evenly'>
            <a onClick={toggle} target='_blank' rel='noreferrer' href='https://drive.google.com/file/d/1o1Ka5RNTOzEiHQuKSOGZWoG06s2fybS5/view?usp=share_link' className='flex btn items-center justify-center h-[3.125rem]'>
                <p>
                    🇧🇷 Português
                </p>
            </a>
            <a onClick={toggle} target='_blank' rel='noreferrer' href='https://drive.google.com/file/d/18agzZQ13q626iZzhXwOQ3bH1bSiJL7rT/view?usp=share_link' className='flex btn items-center justify-center h-[3.125rem]'>
                <p> 
                    🇺🇸 English
                </p>
            </a>
        </div>
    </div>, document.body) : null 
  );
};
