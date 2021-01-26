import styled from "styled-components";
import { Link } from "react-router-dom";


export const InputDataContainer = styled.div`
  width: 95vw;
  height: 100vh;
  margin: 5vh auto 0 auto;
`;

export const Information = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: inherit;
  height: auto;
  border: 2px solid red;
`;

export const Label = styled.h1`
  font-size: 1em;
  margin: 1.5vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Submit = styled.input`
  margin: 10vh 0vh;
`;

export const InputField = styled.input`
  margin: 2vh;
`;

export const ActionButtons = styled.div`
  display: flex;
`;

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Header = styled.div`
  width: 100vw;
  height: 10vh;
  background: #154360;
  display: flex; 
  align-items: center;
`;

export const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 2vw;
`;
