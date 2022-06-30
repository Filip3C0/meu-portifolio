import styled from "styled-components";

export const AboutMe = styled.section`
  -webkit-box-shadow: inset -1px 39px 47px -19px rgba(0, 0, 0, 0.3);
  box-shadow: inset -1px 39px 47px -19px rgba(0, 0, 0, 0.2);
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
    position: relative;
    margin-top: 40px;
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
  color: #c4c7cb;
  &::before{
    content: "";
    width: 10px;
    height: 10px;
    background-color:red;
    position: relative;
    bottom: 0;
  }

`;
