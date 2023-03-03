import React, { useState } from "react";
import { Link as ScrollLink } from 'react-scroll/modules';

import { HiDocumentDownload } from 'react-icons/hi';
import { FiMenu } from 'react-icons/fi';
import  { Modal} from './Modal';

const Navbar = ({toggleSidebar}) => {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(!open);

    return (
        <div className='bg-white fixed top-0 w-[100%] z-10 relative'>
            <div className='container flex items-center justify-between px-4 py-4 mx-auto my-0'>
                <div className='text-[1.5rem] text-[#ff4d41]'>
                    <ScrollLink 
                            activeClass='none' 
                            to="home" spy={true} 
                            smooth={true} 
                            duration={300} 
                        >
                        &lt;LN Dev/&gt;
                    </ScrollLink>
                </div>
                <div className='hidden gap-6 md:flex'>

                        <ScrollLink 
                            className='hover:text-[#ff4d40] transition duration-500 ease-in-out'
                            activeClass="active" 
                            to="home" spy={true} 
                            smooth={true} 
                            duration={300} 
                        >
                            Home
                        </ScrollLink>

                        <ScrollLink 
                            className='hover:text-[#ff4d41] transition duration-500 ease-in-out'
                            activeClass="active" 
                            to="about" spy={true} 
                            smooth={true} 
                            // offset={-9} 
                            duration={300} 
                        >
                            Sobre
                        </ScrollLink>

                        <ScrollLink 
                            className='hover:text-[#ff4d41] transition duration-500 ease-in-out' 
                            activeClass="active" 
                            to="habilities" spy={true} 
                            smooth={true} 
                            // offset={-5} 
                            duration={300} 
                        >
                            Habilidades
                        </ScrollLink>

                        <ScrollLink 
                            className='hover:text-[#ff4d41] transition duration-500 ease-in-out'
                            activeClass="active" 
                            to="skills" spy={true} 
                            smooth={true} 
                            // offset={-5} 
                            duration={300} 
                        >
                            Skills
                        </ScrollLink>

                        <ScrollLink 
                            className='hover:text-[#ff4d41] transition duration-500 ease-in-out' 
                            activeClass="active" 
                            to="projects" spy={true} 
                            smooth={true} 
                            // offset={0} 
                            duration={300} 
                        >
                            Projetos
                        </ScrollLink>

                        <ScrollLink 
                            className='hover:text-[#ff4d41] transition duration-500 ease-in-out'
                            activeClass="active" 
                            to="contact" spy={true} 
                            smooth={true} 
                            // offset={13} 
                            duration={300} 
                        >
                            Contato
                        </ScrollLink>

                </div>

                <a 
                    onClick={toggle}
                    className='hidden md:flex border border-[#ff4d41] px-4 py-1 text-[#ff4d41] rounded-[0.3125rem] items-center gap-2 hover:bg-[#ff4d41] hover:text-white transition duration-200 cursor-pointer'
                >
                    <HiDocumentDownload size={24} />
                    Baixe o meu CV
                </a>


                <div className='md:hidden text-[1.5rem]' onClick={toggleSidebar}>
                    <FiMenu />
                </div>
            </div>
                <Modal isOpen={open} toggle= {toggle}/>
        </div>
    );
};

export default Navbar;
