import React from "react";
import ScrollReveal from "scrollreveal";
import {
  Container,
  P,
  H1,
  Ul,
  ContainerHeader,
  Image,
} from "./style";

import Code from "../../assets/code.svg";
import Dev from "../../assets/code.png";
import Burger from "../../assets/projects-photos/burger-app.png";
import Login from "../../assets/projects-photos/login-page.png";
import Money from "../../assets/projects-photos/money-converter.png";
import Curriculo from "../../assets/curriculo-filipe.pdf";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import CSS from "../../assets/icons-skills/css.svg";
import HTML from "../../assets/icons-skills/html.svg";
import JS from "../../assets/icons-skills/js.svg";
import SASS from "../../assets/icons-skills/sassicon.svg";
import ReactIcon from "../../assets/icons-skills/react.svg";
//Import Components
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ParagraphAbout, ImageAbout, AboutMe } from "../About/style";
import {
  Projects,
  CardProject,
  H1 as H1Projects,
  ImageCard,
} from "../Projects/style";
import { Skills, PSkills, CardSkills, ImageCardSkill } from "../Skills/style";
import {ContactUs} from "../ContactMe"
export class RevealMe extends React.Component {
  //Essa parte cuida da parte do ScrollRec
  componentDidMount = () => {
    ScrollReveal({
      reset: true,
      duration: 1500,
      delay: 400,
      distance: "60px",
    });
    ScrollReveal().reveal(".AboutTitle, .HeaderTitle", {
      delay: 500,
      origin: "left",
    });
    ScrollReveal().reveal(".container,.row, .aboutMe", {
      delay: 600,
      origin: "bottom",
    });
    ScrollReveal().reveal(".devImage, .codeImage", {
      delay: 700,
      origin: "right",
    });
    ScrollReveal().reveal(".projects", {
      delay: 800,
      origin: "left",
    });
    ScrollReveal().reveal(".card-projects", {
      delay: 900,
      origin: "top",
    });
    ScrollReveal().reveal(".paragraphSkills", {
      delay: 900,
      origin: "rigth",
    });
    ScrollReveal().reveal(".skillscards", {
      delay: 900,
      origin: "top",
    });
  };

  render() {
    /*Vai criar uma nova cor para o butão de baixar CV*/

    const theme = createTheme({
      palette: {
        primary: {
          main: "#479295",
        },
      },
    });

    return (
      <>
       <Ul>
            <p><span>&lt;</span>Filipe Costa<span>/&gt;</span></p>

            <a href="#about">
              <li>Sobre mim</li>
            </a>
            <a href="#projects">
              <li>Projetos</li>
            </a>

            <a href="#projects">
              <li>Habiliades</li>
            </a>
            <a href="#projects">
              <li>Entre em contato</li>
            </a>
          </Ul>
        <Container section className="container" id="testimonials">

          <ContainerHeader className="row" ref="box1">
            
            <P className="HeaderTitle">Olá, eu sou</P>
            <H1>Filipe Costa</H1>
            <P className="HeaderTitle">Desenvolvedor Front-end</P>
            
            {/*Button de baixar CV*/}
            <ThemeProvider theme={theme}>
              <a href={Curriculo} download>
                <Button variant="outlined" size="large">
                  Baixar CV
                </Button>
              </a>
            </ThemeProvider>
            <div class="imageHeader">
              <Image className="codeImage" src={Code} />
            </div>
            
          </ContainerHeader>

          
        </Container>

        {/*Parte de sobre mim*/}
        <AboutMe id="about" className="aboutMe">
          <p className="AboutTitle">Sobre mim</p>
          <a
            href="https://www.flaticon.com/free-icons/code"
            title="code icons"
            target="_blanck"
          >
            <ImageAbout className="devImage" src={Dev} alt="Dev Logo image" />
          </a>
          <div></div>
          <ParagraphAbout>
            Me chamo Filipe Costa, sou Desenvolvedor Front-end, gosto de
            soluções inteligentes para problemas complexos, resolve-los de
            maneira prática. Sou um Desenvolvedor um pouco fora da caixinha
            gosto de sempre inovar, buscar o que há de novo não ficar parado ou
            preso pra sempre em algo, sempre em busca da evolução.
          </ParagraphAbout>
        </AboutMe>

        {/*Area de Projetos*/}
        <div className="projects">
          <H1Projects className="projects">Projetos</H1Projects>
          <Projects id="projects">
            <CardProject className="card-projects">
              <ImageCard src={Burger} alt="Burger Site" />
              <div>
                <a
                  href="https://github.com/Filip3C0/burguer-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon fontSize="large" />
                </a>
              </div>
            </CardProject>
            {/*Burger app card*/}

            <CardProject className="card-projects">
              <ImageCard src={Login} alt="Burger Site" />

              <div>
                <a
                  href="https://github.com/Filip3C0/login-page"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon fontSize="large" />
                </a>
              </div>
            </CardProject>
            {/*Login page card*/}

            <CardProject className="card-projects">
              <ImageCard src={Money} alt="Burger Site" />
              <div>
                <a
                  href="https://github.com/Filip3C0/moneyConverter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon fontSize="large" />
                </a>
              </div>
            </CardProject>
            {/*Money converter Card */}
          
            
          </Projects>

          {/*Area de Habilidades*/}
        </div>

        <PSkills className="paragraphSkills">Habilidades</PSkills>
        <Skills className="skillscards">
          <CardSkills>
            <ImageCardSkill src={CSS} />
          </CardSkills>

          <CardSkills>
          <ImageCardSkill src={HTML}/>
            <h3>HTML</h3>
          </CardSkills>

          <CardSkills>
            <ImageCardSkill src={JS} />
            <h3>JavaScript</h3>
          </CardSkills>

          <CardSkills>
            <ImageCardSkill src={SASS} />
            <h3>SASS</h3>
          </CardSkills>

          <CardSkills>
            <ImageCardSkill src={ReactIcon} />
            <h3>React</h3>
          </CardSkills>
        </Skills>


        {/*Area de contato*/}

      <ContactUs>
        
      </ContactUs>
      </>
    );
  }
}
export default RevealMe;
