import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'


const Contact = () => {
  return (
    <section id='contact'>
      <h5>What I Offer</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>testemail@gmail.com</h5>
            <a href="mailto:testeemail@gmail.com" target='_blank' rel='noreferrer' >Enviar mensagem</a>

          </article>
          <article className="contact__option">
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>testemail@gmail.com</h5>
            <a href="mailto:testeemail@gmail.com" target='_blank' rel='noreferrer' >Enviar mensagem</a>

          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>testemail@gmail.com</h5>
            <a href="mailto:testeemail@gmail.com" target='_blank' rel='noreferrer' >Enviar mensagem</a>

          </article>
        </div>
        <form action="">
          <input type="text" name="name" id="" placeholder='Seu nome completo' required/>
          <input type="email" name="email" placeholder='Seu e-mail' required/>
          <textarea name="message" id="" rows="7" placeholder='Sua Mensagem'></textarea>
          <button type='submit' className="btn btn-primary">Enviar Mensagem</button>
        </form>

      </div>
    </section>
  )
}

export default Contact