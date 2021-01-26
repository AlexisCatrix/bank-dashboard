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
        <HomeIcon />
      </Header>
      <WorkPlace>
        <WelcomeTitle>Hi there ! There will be a dashboard here !</WelcomeTitle>
      </WorkPlace>
    </DashboardContainer>
  );
}
