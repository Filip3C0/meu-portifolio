import styled from "styled-components";

export const AboutMe = styled.section`
  -webkit-box-shadow: inset -1px 39px 47px -19px rgba(0, 0, 0, 0.3);
  box-shadow: inset -1px 39px 47px -19px rgba(0, 0, 0, 0.2);
  margin-bottom: 90px;
  display: grid;
  display: flex;
  flex-direction: column;
  width: 100%;
  p:first-child {
    grid-area: P;
    text-align: center;
    font-size: 48px;
    position: relative;
    margin-top: 40px;
  }
  
 
  
`;
export const ImageAbout = styled.img`
  width: 150px;
  margin-right: 90px;
  @media (max-width: 1024px) {
   display: none;
 }
`;

export const ParagraphAbout = styled.p`
  font-size: 18px;
  color: #c4c7cb;
  display: flex;
  text-align: justify;
  overflow: hidden;
  width: 900px;
  align-self: center;
  @media (max-width: 1024px) {
    font-size: 16px;
    width: 500px;
    align-self: center;
  }
  @media (max-width: 530px) {
    font-size: 16px;
    width: 300px;
    align-self: center;
  }

`;
