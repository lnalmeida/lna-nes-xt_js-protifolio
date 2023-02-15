import React from 'react';
import  Image  from 'next/image';

import { HiOutlineCode } from 'react-icons/hi';
import { AiOutlineGithub } from 'react-icons/ai';

const ThumbProject = ({projectLink, githubLink, caption, imgSource, imgAlt}) => {
  return (
    <div className='row-span-2 relative group border border-gray-400 rounded-[5px]'>
        <Image src={imgSource} alt={imgAlt}/>
        <div className='bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 rounded-[5px] text-lg  group-hover:opacity-100 grid place-items-top text-center pt-4 text-white border border-red-500'>
        {caption}
            <div className='flex w-[100%] items-center px-8 py-4 gap-4 justify-around'>
                <a rel='noreferrer' target='_blank' href={projectLink} className='project-link'>
                    <HiOutlineCode className='text-lg' />
                    Projeto
                </a>

                <a rel='noreferrer' target='_blank' href={githubLink} className='project-link'>
                    <AiOutlineGithub className='text-lg' />
                    GitHub
                </a>
            </div>
        </div>   
    </div>
  );
};

export default ThumbProject;
