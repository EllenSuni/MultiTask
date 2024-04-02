import "./App.css";
import DashboardPage from "./pages/DashboardPage";
import ProjectPage from "./pages/ProjectPage";
import ProfilePage from "./pages/ProfilePage";
import Header from "./components/Header";

import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";

function App() {
  const router = createHashRouter([
    {
      children: [
        { element: <DashboardPage />, path: "/" },
        { element: <ProjectPage />, path: "/project/:projectName" },
        { element: <ProfilePage />, path: "/profile" },
      ],

      element: (
        <>
          <Header />
          <main>
            <h1>MultiTask</h1>
            <Outlet />
          </main>
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
