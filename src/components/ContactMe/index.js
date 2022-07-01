import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Input,
  Form,
  TextArea,
  InputButton,
  SocialIcons,
  PForm,
} from "./style";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ScrollReveal from "scrollreveal";
import Swal from 'sweetalert2'


export const ContactUs = () => {
  ScrollReveal({
    duration: 1500,
    delay: 400,
    distance: "60px",
  });

  ScrollReveal().reveal(".forms", {
    delay: 500,
    origin: "left",
  });

  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmailMessage",
        "template_ncwudi7",
        form.current,
        "fmbNQHLhgfntEKDIp"
      )
      .then(
        (result) => {
         Swal.fire({ 
            icon:'success', 
            title: 'Email enviado com sucesso!',
            showConfirmButton: false,
            timer: 2500
          })
        },
        (error) => {
          alert(error.message);
        }
      );
    e.target.reset();
  }



  return (
    <>
      <form method="post" ref={form} onSubmit={sendEmail}>
        <Form ref={form} onSubmit={sendEmail}>
          <PForm className="contactUs">Entre em Contato</PForm>

          <SocialIcons className="contactUs">
            <a
              href="https://www.linkedin.com/in/filipe-costa-nasc/"
              target={"_blank"}
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/Filip3C0"
              target={"_blank"}
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="
          https://wa.me/5595991414385?text=Ol%C3%A1+Filipe%2C+Podemos+conversar%3F"
              target={"_blank"}
            >
              <WhatsAppIcon />
            </a>
          </SocialIcons>
          <Input
            className="forms"
            type="text"
            name="name"
            placeholder="Seu Nome"
          />
          <Input
            className="forms"
            type="email"
            name="email"
            placeholder="Seu Email"
          />
          <TextArea
            className="forms"
            name="message"
            placeholder="Sua Mensagem"
          />
          <InputButton className="forms" type="submit" value="Enviar">
            Enviar
          </InputButton>
        </Form>
      </form>


    </>
  );
};
