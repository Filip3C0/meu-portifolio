import styled from "styled-components";

export const Projects = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #b5d5cd;
  flex-wrap: wrap;
  

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
  margin-left: 30px;
  margin-bottom: 50px;
`;
export const H1 = styled.h1`
    margin-top: 50px;
    margin-bottom: 30px;
    color: #383a3b;
    font-size: 36px;
    font-weight: 400;
    text-align: center;
   
  `
export const ImageCard = styled.img`
display: flex;
border-radius: 25px 25px 0 0;
`