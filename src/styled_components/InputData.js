import styled from "styled-components";
import { Link } from "react-router-dom";
import { PlusSquareFill } from "@styled-icons/bootstrap/PlusSquareFill";
import { RemoveCircle } from "@styled-icons/material-rounded/RemoveCircle";

export const InputDataContainer = styled.div`
  display: flex;
  width: 95vw;
  height: 100vh;
  margin: 5vh auto 0 auto;
  color: white;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  height: auto;
  border: 2px solid white;
  padding: 5vh;
`;

export const Label = styled.h1`
  font-size: 1em;
  margin: 1.5vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  width: 50vw;
  margin: 0 20vw 0 auto;
`;

export const Submit = styled.input`
  margin: 10vh 2vh;
`;

export const InputField = styled.input`
  margin: 2vh;

  &.newItem {
    /* margin: 2vh 4vh 2vh 43vh; */
    translate: 3.5vw 0;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
`;

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(black, #154360);
`;

export const Header = styled.div`
  width: 100vw;
  height: 10vh;
  background: linear-gradient(black, #154360);
  display: flex;
  align-items: center;
  border-bottom: 1px solid white;
`;

export const NavItem = styled(Link)`
  color: white;
  text-shadow: 4px 4px 2px black;
  text-decoration: none;
  padding: 2vw;
`;

export const Remain = styled.p`
  font-size: 1.5em;
  font-weight: 600;
  margin: 2vh;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40vw;
  margin: 0 2vh 0 2vh;
  &#newItem {
    width: 42vw;
  }
`;

export const PlusButton = styled(PlusSquareFill)`
  width: 20px;
  margin-left: 2vw;
  &:hover {
    color: #48d87f;
    transition: all 0.3s ease;
  }
`;

export const RemoveButton = styled(RemoveCircle)`
  width: 20px;
  margin-left: 2vw;

  &:hover {
    color: #ee3e3e;
    transition: all 0.3s ease;
  }
`;
