// eslint-disable-next-line
import React from "react";
import ScrollReveal from "scrollreveal";
import {
  Container,
  P,
  Paragraph,
  ParagraphAbout,
  H1,
  ImageLogo,
  Ul,
  ContainerHeader,
  Image,
  ImageAbout,
  AboutMe,
  Projects,
  CardProject,
} from "./style";
import Code from "../../assets/code.svg";
import Dev from "../../assets/code.png";
import Logo from "../../assets/logo.png";
import Curriculo from "../../assets/curriculo-filipe.pdf";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
        <Container section className="container" id="testimonials">
          <Ul>
            <ImageLogo src={Logo} />
            <p>Filipe Costa</p>
            <a href="#about">
              <li>Sobre mim</li>
            </a>
            <a href="#projects">
              <li>Projetos</li>
            </a>

            <li>Skills</li>
            <li>Entre em contato</li>
          </Ul>

          <ContainerHeader className="row" ref="box1">
            <P className="HeaderTitle">DESENVOLVEDOR FRONT - END</P>
            <H1>Filipe Costa</H1>
            <Paragraph>
              Seja bem-vindo ao meu portfólio, aqui você verá todos os meus
              projetos,poderá ver também meu curriculo, skill e caso queira
              poderá entrar em contato comigo. Fique a vontade!
            </Paragraph>

            {/*Button de baixar CV*/}
            <ThemeProvider theme={theme}>
              <a href={Curriculo} download>
                <Button variant="outlined" size="large">
                  Baixar CV
                </Button>
              </a>
            </ThemeProvider>
          </ContainerHeader>

          <Image className="codeImage" src={Code} />
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
          <ParagraphAbout>
            Me chamo Filipe Costa, sou Desenvolvedor Front-end, gosto de
            soluções inteligentes para problemas complexos, resolve-los de
            maneira prática. Sou um Desenvolvedor um pouco fora da caixinha
            gosto de sempre inovar, buscar o que há de novo não ficar parado ou
            preso pra sempre em algo, sempre em busca da evolução.
          </ParagraphAbout>
        </AboutMe>

        {/*Area de Projeros*/}

        <Projects id="projects">
          <H1 className="projects">Projetos</H1>

          <CardProject className="card-projects">
            <div>
              <a
                href="https://www.google.com.br"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon fontSize="large" />
              </a>
            </div>
          </CardProject>
          <CardProject className="card-projects">
            <div>
              <a
                href="https://www.google.com.br"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon fontSize="large" />
              </a>
            </div>
          </CardProject>
          <CardProject className="card-projects">
            <div>
              <a
                href="https://www.google.com.br"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon fontSize="large" />
              </a>
            </div>
          </CardProject>
          <CardProject className="card-projects">
            <div>
              <a
                href="https://www.google.com.br"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon fontSize="large" />
              </a>
            </div>
          </CardProject>
        </Projects>
      </>
    );
  }
}
export default RevealMe;
