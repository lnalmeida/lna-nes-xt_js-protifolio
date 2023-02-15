import React, { useState, useRef } from 'react';
import Heading from './Heading';

import {FiMail} from 'react-icons/fi';
import emailjs from 'emailjs-com';
import { useToasts } from 'react-toast-notifications';

const Contact = () => {

    const { addToast } = useToasts();
    const [isSended, setIsSended] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const mailForm = useRef();
    
    const clearStates = () => {
        setName('');
        setEmail('');
        setTel('');
        setSubject('');
        setMessage('');
        setIsSended(!isSended);
    }

    const sendContact = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_e6mr44d','template_09jqmly', mailForm.current, 'CgbXgL3ulVmvTxgPm')
            .then((result) => {
                console.log('E-mail enviado corretamente!');
                clearStates();
                // document.querySelectorAll('.inputStyle').forEach(input => input.value = '');
                addToast('Mensagem enviada com sucesso!', 
                    { 
                        appearance : 'success',
                        placement: 'top-center',
                        autoDismiss: true,
                        autoDismissTimeout: 2000,
                    }
                );
            }, 
            (error) => {
                console.log('Falha no envio do email!');
                addToast('Falha no envio da mensagem!', 
                    { 
                        appearance : 'error',
                        placement: 'top-center',
                        autoDismiss: true,
                        autoDismissTimeout: 2000,
                    }
                );
        });
    };

    return (
        <section id='contact' className='container px-4 py-20 mx-auto'>
            <Heading title='Me mande um e-mail!' />
            <p className='mb-10 font-medium text-gray-600'>Se você quiser me mandar um e-mail, pode ficar à vontade, basta preencher o formulário abaixo. <br/>
            Será um grande prazer atendê-lo!
            </p>

            <form ref={mailForm} className='flex flex-col gap-8'>
                <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                    <input
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        name='name' 
                        type='text' 
                        placeholder='Seu nome' 
                        className='inputStyle' 
                        required 
                    />
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)} 
                        name='email' 
                        type='email' 
                        placeholder='Seu e-mail' 
                        className='inputStyle' 
                        required 
                    />
                </div>

                <div className='flex flex-col gap-8 sm:flex-row'>
                    <input
                        value={tel}
                        onChange={e => setTel(e.target.value)} 
                        name='tel' 
                        type='tel' 
                        placeholder='Seu telefone' 
                        className='inputStyle  w-[45%] md:w-[25%]'
                    />
                    <input
                        value={subject}
                        onChange={e => setSubject(e.target.value)} 
                        name='subject' 
                        type='text' 
                        placeholder='Sobre o que você quer falar' 
                        className='inputStyle w-[77%] ml-1' 
                        required 
                    />
                </div>

                <textarea
                    value={message}
                    onChange={e => setMessage(e.target.value)} 
                    name='message' 
                    rows='6' 
                    placeholder='Digite sua mensagem aqui' 
                    className='inputStyle' 
                    required >
                </textarea>

                <div>
                    <button onClick={sendContact} type='submit' className='flex items-center gap-2 btn '>
                        <FiMail />
                        Enviar
                    </button>
                </div>
            </form> 
        </section>
    );    
};

export default Contact;
