import React from 'react';
import Image from 'next/image';

import {AiOutlineGift} from 'react-icons/ai';
import {FiBookOpen} from 'react-icons/fi';
import {TbPacman} from 'react-icons/tb';
import {IoLocationOutline} from 'react-icons/io5';
import {FaWhatsapp} from 'react-icons/fa';

import Heading from './Heading';
import foto from '../assets/me_clocks.jpg';
import Button from './Button';

const About = () => {
    return (
        <section id='about' className='container px-10 py-20 mx-auto'> 
            <Heading title='Sobre mim' />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[1.75rem]'>
                <div>
                    <Image className='rounded-md drop-shadow-md' src={foto} height={350} width={500} alt='Luiz Almeida' />
                </div>
                <div className= 'border border-[#ccc] rounded-md drop-shadow-lg'>
                    <p className='px-4 py-8 font-medium text-gray-600'>
                        Sou Luiz Almeida, e possuo mais de 20 anos de experiência de trabalho em TI, tendo ido desde trabalhos com infraestrutura de redes e programação usando Delphi 7, banco de dados relacionais como firebird e MySQL e MS-SQL Server. 
                    </p>
                    <div className='flex items-center justify-between mb-8 w-100'>
                        <div className='flex flex-col gap-6 ml-4'>
                            <div className='flex items-center gap-4 font-medium text-gray-600'>
                                <AiOutlineGift className='text-[#ff4d41] text-[1.375rem]' />
                                <div>
                                    Data de Nascimento : 24/04/1979
                                </div>
                            </div>
                            <div className='flex items-center gap-4 font-medium text-gray-600'>
                                <FiBookOpen className='text-[#ff4d41] text-[1.375rem]' />
                                <div>
                                    Estudos : Estácio - Análise e Desenvolvimento de Sistemas - 6º período
                                </div>
                            </div>
                            <div className='flex items-center gap-4 font-medium text-gray-600'>
                                <TbPacman className='text-[#ff4d41] text-[1.375rem]' />
                                Interesses : Desenvolvimento 💻, Jiu-jitsu 🥋, Leitura 📖, Churrasco ♨️!
                            </div>
                            <div className='flex items-center gap-4 font-medium text-gray-600'>
                                <IoLocationOutline className='text-[#ff4d41] text-[1.375rem]' />
                                Localização : São João de Meriti - RJ
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center px-4 py-8 w-100'>
                        <p className='font-medium text-gray-600'>
                            Interessado em me dar uma chance?
                        </p>
                        <a className='btn flex gap-2'
                            target='_blank' 
                            rel='noreferrer' 
                            href='https://wa.me/5521983984136'
                        >
                            <FaWhatsapp  size={24}/>
                            Chama no Zap!
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
