import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import About from './pages/About'
import Docs from './pages/Docs'
import Install from './pages/Install'

const router = createHashRouter([{
  path: "/",
  element: <App />,
  errorElement: <div>error</div>
}, {
  path: "/docs",
  element: <Docs />
}, {
  path: "/install",
  element: <Install />
}, {
  path: "/about",
  element: <About />
}])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
