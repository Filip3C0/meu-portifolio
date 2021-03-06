import styled from "styled-components";
import "./styles.css"
export const Container = styled.div`
  
`;

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap:30px;
    width: 100%;
`;

export const Image = styled.img`
  width: 400px;
  align-self:flex-end;
  margin-bottom: 200px;
  @media (max-width: 1024px) {
    width: 200px;
  }
`;
export const P = styled.p`
  font-weight: 200;
  font-size: 14px;
  letter-spacing: 2px;
   :first-child{
    font-weight: bold;
    margin-top: 90px;
   }
   @media  (max-width: 1024px) {
  font-size: 12px;
 }
`;

export const H1 = styled.h1`
  font-size: 50px;
  letter-spacing: 1px;
  font-weight: 500;
 line-height: 10px;
 @media  (max-width: 1024px) {
  font-size: 20px;
 }
`;
