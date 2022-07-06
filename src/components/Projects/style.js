import styled from "styled-components";

export const Projects = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
  
`;
export const CardProject = styled.div`
  place-self: center;
  width: 350px;
  height: 250px;
  background-color: transparent;
  border-radius: 25px;
  -webkit-box-shadow: 1px -26px 27px -8px #185355; 
  box-shadow: 1px -26px 27px -8px #185355;  
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin: 50px 0 50px 30px;
  @media (max-width: 1024px){
      width: 250px;
      height: 150px;
      margin-bottom: 50px; 
  }
`;
export const H1 = styled.h1`
    margin-top: 50px;
    color:#479295;
    font-size: 36px;
    font-weight: 400;
    text-align: center;
   
  `
export const ImageCard = styled.img`
display: flex;
border-radius: 25px 25px 0 0;
`