import './App.css'
import Dashboard from './pages/Dashboard'
import ProjectPage from './pages/ProjectPage'
import Header from "./components/Header"

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
          <Header/>
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
