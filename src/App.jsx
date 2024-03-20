import './App.css'
import Dashboard from './pages/Dashboard'
import ProjectPage from './pages/ProjectPage'
import Navbar from "./components/Navbar"

import {
  createHashRouter,
  Outlet,
  RouterProvider
} from 'react-router-dom'


function App() {
  const router = createHashRouter([
    {
      children: [
        {element: <Dashboard/>, path: "/"},
        {element: <ProjectPage/>, path: "/project"}
      ],

      element: (
        <>
          <header>
            <Navbar/>
          </header>
          <main>
            <Outlet />
          </main>
        </>
      )
    }
  ])

  return <RouterProvider router={router}/>
}

export default App
