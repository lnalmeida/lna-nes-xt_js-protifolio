import React from 'react';

import Heading from './Heading';

import ThumbProject from './ThumbProject';

import image01 from '../assets/project-move-it.png';
import image02 from '../assets/project-react-ts-finance.png';
import image03 from '../assets/project-tic-tac-toe.png';
import image04 from '../assets/project-vercel-page-clone.png';
import image05 from '../assets/project-dropbox-clone-ui.png';
import image06 from '../assets/project-todo-mvc.png';

const Projects = () => {
  return (
    <section id='projects' className='container px-10 py-6 mx-auto bg-slate-100'>
        <Heading title='Alguns projetos'/>

        <p className='mb-10 font-medium text-gray-600'> Alguns pequenos projetos feitos para fins de aprendizado e diversão.</p>

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
            <ThumbProject 
                projectLink='https://lnalmeida-moveit-next-theta.vercel.app/'
                githubLink='https://github.com/lnalmeida/nlw4-moveit-next'
                caption='Move-It!'
                imgSource={image01}
                imgAlt='Move-It!'
            />
            <ThumbProject 
                projectLink='https://react-ts-finance.surge.sh/'
                githubLink='https://github.com/lnalmeida/react-ts-finance'
                caption='React TS Finance'
                imgSource={image02}
                imgAlt='Move-It!'
            />
            <ThumbProject 
                projectLink='https://tic-tac-toe-lnalmeida.netlify.app/'
                githubLink='https://github.com/lnalmeida/tic-tac-toe-game'
                caption='Jogo da Velha'
                imgSource={image03}
                imgAlt='Jogo da Velha'
            />
            <ThumbProject 
                projectLink='https://lnalmeidavercelcloneui.netlify.app/'
                githubLink='https://github.com/lnalmeida/clone-vercel-homepage'
                caption='Vercel page clone UI'
                imgSource={image04}
                imgAlt='Vercel page clone UI'
            />
            <ThumbProject 
                projectLink='https://lnalmeidadropboxcloneui.netlify.app/'
                githubLink='https://github.com/lnalmeida/dropbox_home_clone'
                caption='DropBox page clone UI'
                imgSource={image05}
                imgAlt='Dropbox clone UI'
            />
            <ThumbProject 
                projectLink=''
                githubLink='https://github.com/lnalmeida/TodoMVC'
                caption='Asp .Net Core MVC To Do App'
                imgSource={image06}
                imgAlt='Asp .Net Core MVC To Do App'
            />


        </div>
    </section>
  );
};

export default Projects;