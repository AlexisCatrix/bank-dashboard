import styled from "styled-components";
import { ReturnUpBack } from "@styled-icons/ionicons-solid/ReturnUpBack";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const WelcomeTitle = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
`;

export const HomeIcon = styled(ReturnUpBack)`
  color: black;
  width: 10vh;
`;

export const Header = styled.div`
display: flex;
justify-content: center;
  height: 8vh;
  width: 100vw;
  border: 2px solid black;
`;

export const WorkPlace = styled.div`
  height: 80vh;
`;
