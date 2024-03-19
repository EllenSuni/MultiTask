import './App.css'
import Dashboard from './pages/Dashboard'
import ProjectPage from './pages/ProjectPage'

import {
  createHashRouter,
  Link,
  Outlet,
  RouterProvider
} from 'react-router-dom'

function Root() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/project">Project</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

function App() {
  const router = createHashRouter([
    {
      children: [
        {element: <Dashboard/>, path: "/"},
        {element: <ProjectPage/>, path: "/project"}
      ],

      element: <Root/>
    }
  ])

  return <RouterProvider router={router}/>
}

export default App
