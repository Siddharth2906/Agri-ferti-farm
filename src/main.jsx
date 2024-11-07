import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Components/Header.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import FarmerCorner from './FarmerCorner.jsx'
import CompanyCorner from './CompanyCorner.jsx'
import Agrimart from './Agrimart.jsx'

const react=createBrowserRouter(
[{
  path:'/',
  element:<App/>,
},
{
  path:'/farmer',
  element:<FarmerCorner/>,
},
{
  path:'/company',
  element:<CompanyCorner/>,
},
{
  path:'/mart',
  element:<Agrimart/>,
},
]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>

   <RouterProvider router={react}>
   <Header/>
   </RouterProvider>
  </StrictMode>,
)
