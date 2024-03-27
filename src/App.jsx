import "./App.css";
import Dashboard from "./pages/Dashboard";
import ProjectPage from "./pages/ProjectPage";
import Header from "./components/Header";

import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";

function App() {
  const router = createHashRouter([
    {
      children: [
        { element: <Dashboard />, path: "/" },
        { element: <ProjectPage />, path: "/project/:projectName" },
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
