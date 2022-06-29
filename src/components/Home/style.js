import styled from "styled-components";
import "./styles.css";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "ul ul ul"
    "header image image";
`;

export const ContainerHeader = styled.div`
  grid-area: header;
  margin-left: 200px;
  height: 35vw;
`;

export const Image = styled.img`
  grid-area: image;
  width: 400px;
  margin: 80px 100px 40px 120px;
`;
export const ImageLogo = styled.img`
  float: left;
  width: 50px;
`;

export const Ul = styled.ul`
  grid-area: ul;
  display: flex;
  list-style: none;
  align-items: flex-end;
  justify-content: flex-end;
  margin-bottom: 60px;

  img {
    position: absolute;
    top: 10px;
    left: 200px;
  }
  li {
    padding: 0 70px 0 50px;
    margin-top: 20px;
  }
  li:hover {
    opacity: 0.8;
    transition: all 0.3s ease-in;
    cursor: pointer;
    letter-spacing: 0.4px;
  }
  p {
    position: absolute;
    top: 25px;
    left: 250px;
    font-weight: 700;
    color: #c4c7cb;
  }
`;

export const P = styled.p`
  font-weight: 500;
  letter-spacing: 2px;
  margin-top: 10%;
`;
export const Paragraph = styled.p`
  margin-top: 20px;
  text-align: justify;
  margin-bottom: 80px;
`;
export const H1 = styled.h1`
  font-size: 50px;
  letter-spacing: 1px;
  font-weight: 500;
  line-height: 40px;
`;
//Area de Abaout me
export const AboutMe = styled.section`
  margin-top: 90px;
  margin-bottom: 90px;
  display: grid;
  grid-template-areas:
    "P P P"
    " IMAGE IMAGE PARA"
    " IMAGE IMAGE PARA";

  p:first-child {
    grid-area: P;
    text-align: center;
    font-size: 48px;
    margin-bottom: 50px;
  }
`;
export const ImageAbout = styled.img`
  width: 250px;
  padding: 0 10px 0 10px;
  grid-area: IMAGE;
  border-radius: 25px;
  margin-left: 90%;

  img {
    width: 150px;
  }
`;

export const ParagraphAbout = styled.p`
  text-align: justify;
  width: 50%;
  grid-area: PARA;
  margin-left: 30%;
`;

//Area de projetos
export const Projects = styled.section`
  display: grid;
  grid-template-areas:"h1 h1 h1";

  /* grid-template-rows: 1fr 1fr 1fr; */
  h1 {
    grid-area: h1;
    text-align: center;
    margin-top: 50px;
    color: #383a3b;
  }
`;
export const CardProject = styled.div`
  margin: 0 auto;
  width: 350px;
  height: 250px;
  background-color: transparent;
  margin-top: 50px;
  margin-bottom: 30px;
  border-radius: 25px;
  -webkit-box-shadow: 7px 3px 15px 0px rgba(24,83,85,0.54); 
  box-shadow: 7px 3px 15px 0px rgba(24,83,85,0.54);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  div:nth-child(5){
     background-color: red;
  }

  
`;
