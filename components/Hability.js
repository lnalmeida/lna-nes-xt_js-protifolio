import React from 'react';

import Heading from './Heading';
import { RiLightbulbFlashLine } from 'react-icons/ri';

const Hability = () => {
  return (
      <section id='habilities' className='container px-10 py-8 mx-auto bg-slate-100'>
        <Heading title='Habilidades' />
        <div  className='grid grid-cols-1 gap-6 md:grid-cols-3'>

          <div  className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4d41] text-white rounded-[5px]'>
            <div className='flex gap-3 text-left'>
              <RiLightbulbFlashLine className='text-[1.75rem]'/>
              <h2 className='font-medium text-[1.25rem]'>Frontend</h2>
            </div>
            <p>
              Desenvolvimento de interfaces utilizando HTML, Javascript, CSS, focando em ReactJS. Também possuo bons conhecimentos em Angular 2+ e sigo estudando a tecnologia.
            </p>
          </div>

          <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4d41] text-white rounded-[5px]'>
            <div className='flex gap-3 text-left'>
              <RiLightbulbFlashLine className='text-[1.75rem]' />
              <h2 className='font-medium text-[1.25rem]'>Backend</h2>
            </div>
            <p>
              Lógica de programação, estrutura de dados, arquitetura REST, programação orientada a objetos, no momento utilizando C# / .NET e NodeJS com Typescript como principais ferramentas, tendo passado pelo Object Pascal com a IDE Delphi 7 e 2010 e experimentando as linguagens Java com Spring e Python.
            </p>
          </div>

          <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4d41] text-white rounded-[5px]'>
            <div className='flex gap-3 text-left'>
              <RiLightbulbFlashLine className='text-[1.75rem]' />
              <h2 className='font-medium text-[1.25rem]'>Banco de Dados</h2>
            </div>
            <p>
              SQL(DDL, DML, DQL, DCL e TCL), joins, procedures e functions, com conhecimentos em MS-SQL Server, MySQL, Postgres, Firebird, SQLite e também Bancoa de dados não relacionais, como o Firestore e MongoDB.
            </p>
          </div>
        </div>
      </section>
  );
};
export default Hability;
