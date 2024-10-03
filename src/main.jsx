import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Components/Header.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const react=createBrowserRouter(
[{
  path:'/',
  element:<App/>
}]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>

   <RouterProvider router={react}>
   <Header/>
   </RouterProvider>
  </StrictMode>,
)
