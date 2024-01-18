import React from 'react'
import { Link as ScrollLink } from 'react-scroll/modules';

import TypeWriter from 'typewriter-effect';
import Button from './Button';

const Hero = () => {
    return (
        <div id='home' className='bg-[url("../assets/background_js_02.jpg")] h-screen bg-cover bg-center bg-fixed flex items-center'>

            <div className='container px-4 mx-auto'>

                <div className='max-w-[28.125rem] text-white flex flex-col gap-[2.5rem]'>
                    <div>
                        <h1 className='text-5xl'>Eu sou Luiz Almeida</h1>
                        <h4 className='my-3 text-3lx'>
                            <TypeWriter
                                options={{
                                    strings: [
                                        'Desenvolvedor.',
                                        'C#', 
                                        'ASP .NET / .NET Core',
                                        'Entity Framework',
                                        'Dapper',
                                        'SQL / NoSQL',
                                        'Frontend / Backend',
                                        'Javascript / Typescript',
                                        'NodeJS',
                                        'ReactJS',
                                        'Angular 2+',
                                    ],
                                    changeDelay: 3,
                                    changeDeletedSpeed: 2,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h4>
                    </div>
                    <div className='bg-[#ff4d41] h-[0.125rem] w-[2.5rem]'></div>
                    <div>
                        <p>
                            Apaixonado por tecnologia, desenvolvimento web e aprendizado, pai, esposo, filho, irmão, desenvolvedor e incentivador de pessoas.
                        </p>
                        {/*Ultima alteração */}
                        
                        <ScrollLink 
                            className='btn'
                            activeClass="active" 
                            to="about" spy={true} 
                            smooth={true} 
                            duration={300} 
                        >
                            Saiba mais
                        </ScrollLink>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Hero;
