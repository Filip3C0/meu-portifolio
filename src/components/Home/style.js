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
  
`;

export const Image = styled.img`
  width: 400px;
  align-self:flex-end;
  margin-bottom: 200px;
`;

export const Ul = styled.div`
  grid-area: ul;
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin-bottom: 60px;
  align-items: center;
  li:hover {
    opacity: 0.8;
    transition: all 0.3s ease-in;
    cursor: pointer;
    letter-spacing: 0.4px;
  }
  p{
    font-weight: 700;
    font-size: 20px;
    color: #c4c7cb;
    margin-right: 50px;
  }
  span{
    color: #3C8789;
    font-size: 25px;
    padding: 10px;

    
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
`;

export const H1 = styled.h1`
  font-size: 50px;
  letter-spacing: 1px;
  font-weight: 500;
 line-height: 10px;
`;
