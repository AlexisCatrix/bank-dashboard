import { Link } from "react-router-dom";
import {
  DashboardContainer,
  WelcomeTitle,
  HomeIcon,
  Header,
  WorkPlace,
} from "../styled_components/Dashboard";

export default function Dashboard() {
  return (
    <DashboardContainer>
      <Header>
        <Link to="/">
          <HomeIcon />
        </Link>
      </Header>
      <WorkPlace>
        <WelcomeTitle>Hi there ! There will be a dashboard here !</WelcomeTitle>
      </WorkPlace>
    </DashboardContainer>
  );
}
