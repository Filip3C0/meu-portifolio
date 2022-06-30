import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {Input,Form, TextArea} from './style'
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rl7f5ga', 'template_q0rv8y9', form.current, 'fmbNQHLhgfntEKDIp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Form ref={form} onSubmit={sendEmail}>
    <p>Entre em Contato</p>
      <Input type="text" name="user_name" placeholder='Seu Nome'/>
      <Input type="email" name="user_email" placeholder='Seu Email' />
      <TextArea name="message" placeholder='Sua Mensagem'/>
      <input type="submit" value="Send" />
    </Form>
  );
};