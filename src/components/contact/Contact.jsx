import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_g680ovh', 'template_hq00a9j', form.current, 'SjsLYu3qPfh-8i1n5')
    .then((result) => {
        let resultado = document.getElementById('resultado');
        console.log(resultado);
         resultado.innerHTML = "Email Enviado com sucesso";
          console.log(result.text);

      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };
  

  return (
    <section id='contact'>
      <h5>What I Offer</h5>
      <h2>Contact</h2>
      
      <div className="container contact__container">

        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>testemail@gmail.com</h5>
            <a href="mailto:testeemail@gmail.com" target='_blank' rel='noreferrer' >Enviar mensagem</a>

          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>testemail@gmail.com</h5>
            <a href="mailto:testeemail@gmail.com" target='_blank' rel='noreferrer' >Enviar mensagem</a>

          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>testemail@gmail.com</h5>
            <a href="mailto:testeemail@gmail.com" target='_blank' rel='noreferrer' >Enviar mensagem</a>

          </article>
        </div>
        <div className="formulario">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" id="" placeholder='Seu nome completo' required/>
            <input type="email" name="email" placeholder='Seu e-mail' required/>
            <textarea name="message" id="" rows="7" placeholder='Sua Mensagem'></textarea>
            <button type='submit' className="btn btn-primary">Enviar Mensagem</button>
          </form>
        

        </div>

      </div>
    </section>
  )
}

export default Contact