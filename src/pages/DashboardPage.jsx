import CalendarView from "../components/Calendar";
import ProjectRender from "../components/ProjectRender";

function DashboardPage() {
  return (
    <>
      <ProjectRender quote={'"Hakuna matata"'} />
      <CalendarView />
    </>
  );
}

export default DashboardPage;
