import "./App.css";
import DashboardPage from "./pages/DashboardPage";
import ProjectPage from "./pages/ProjectPage";
import ProfilePage from "./pages/ProfilePage";
import Header from "./components/Header";

import Context from "./Context";

import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";

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

  const [user, setUser] = useState({ isLoggedIn: false });

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  return (
    <Context.Provider value={{ user, setUser }}>
      <RouterProvider router={router} />
    </Context.Provider>
  );
}

export default App;
