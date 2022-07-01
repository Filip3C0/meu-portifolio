import styled from "styled-components";

export const Form = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background-color: #b5d5cd;
`;
export const Input = styled.input`
  align-self: center;
  width: 400px;
  height: 48px;
  background-color: white;
  outline: none;
  padding-left: 20px;
  border-radius: 5px;
  outline: none;
  background-color: #202733;
  color: #c4c7cb;

  ::placeholder {
    color: #c4c7cb;
  }
  :focus {
    transition: all 0.4s;
    background-color: #479295;
    color: black;
    ::placeholder {
      color: black;
    }
  }
`;

export const TextArea = styled.textarea`
  align-self: center;

  width: 400px;
  height: 100px;
  padding-left: 20px;
  border-radius: 5px;
  outline: none;
  padding-top: 10px;
  background-color: #202733;
  color: #c4c7cb;

  ::placeholder {
    color: #c4c7cb;
  }
  :focus {
    transition: all 0.4s;
    background-color: #479295;
    color: black;
    ::placeholder {
      color: black;
    }
  }
`;

export const InputButton = styled.button`
  width: 120px;
  height: 38px;
  margin-bottom: 20px;
  background-color: transparent;
  border: 2px solid #202733;
  border-radius: 5px;

  :hover {
    background-color: red;
    transition: all 0.7s ease-in;
    background-color: #479295;
    border: none;
    color: white;
    cursor: pointer;
  }
`;
export const SocialIcons = styled.div`
  display: flex;
  background-color: transparent; 
  gap: 30px;   
  a{
   color: #202733;
  }
  a:nth-child(1):hover{
    color: #0277B5;
    transition: all .4s ease-in;
  }
  a:nth-child(2):hover{
    color: #333;
    transition: all .4s ease-in;
  }
  a:nth-child(3):hover{
    color: #48C655;
    transition: all .4s ease-in;
  }
  
`;
export const PForm = styled.p`
  text-align: center;
  font-size: 28px;
  margin-top: 20px;
  color: #383a3b;
`;
export const Swal = styled.div `
 background-color: white;
`