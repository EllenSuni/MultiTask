import CalendarView from "../components/Calendar";
import ProjectRender from "../components/ProjectRender";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10vw;
`;

function DashboardPage() {
  return (
    <Container>
      <ProjectRender />
      <CalendarView />
    </Container>
  );
}

export default DashboardPage;
