import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './Components/form.css'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import FarmerCorner from './FarmerCorner.jsx'

import FarmerSignUpForm from './Components/FarmerSignUpForm'
import CompanyCorner from './CompanyCorner.jsx'
import Agrimart from './Agrimart.jsx'
import { MyContextProvider } from './Context/MyContext.jsx'
import FarmerRegister from './Components/FarmerShop/FarmerRegister.jsx'
import Layout from './Components/FarmerShop/FarmerLayout.jsx'
import { FaR } from 'react-icons/fa6'
import FarmerHead from './Components/FarmerShop/FarmerHead.jsx'
import CompanyLogin from './Components/Company/CompanyLogin.jsx'
import CompanyRegister from './Components/Company/CompanyRegister.jsx'
import BuyerLogin from './Components/Agrimart/BuyerLogin.jsx'
import BuyerRegister from './Components/Agrimart/BuyerRegister.jsx'


import Weather from './Components/FarmerShop/Weather.jsx'
import FarmMarketDashboard from './Components/FarmerShop/FarmerMarketDashboard.jsx'
import FarmerProfile from './Components/FarmerShop/FarmerProfile.jsx'
import CompanyProfile from './Components/Company/CompanyProfile.jsx'

const react=createBrowserRouter(
[
  {
  path:'/',
  element:<App/>,
},                                                
{
  path:'/farmer',
  element:<FarmerCorner/>,
  children: [
    {
     path:"",
     element:<FarmerHead/>
    },
    {
     path:"weather",
     element:<Weather/>
    },
    {
     path:"pricesDashboard",
     element:<FarmMarketDashboard/>
    },
    {
     path:"profile",
     element:<FarmerProfile/>
    },
    {
      path: 'form', // Nested route: '/farmer/signup'
      element:<Layout/>,
      children:[
        {
          path: 'signup', // Nested route: '/farmer/signup'
          element:<FarmerRegister/>
        },
        {
          path: 'login', // Nested route: '/farmer/signup'
          element:<FarmerRegister/>
        },
       
      ]

    },
   
  ],
},
{
  path:'/company',
  element:<CompanyCorner/>,
  children: [
    {
      path:"profile",
      element:<CompanyProfile/>
     },
    {
      path: 'form', // Nested route: '/farmer/signup'
      element:<Layout/>,
      children:[
        {
          path: 'signup', // Nested route: '/farmer/signup'
          element:<CompanyLogin/>
        },
        {
          path: 'login', // Nested route: '/farmer/signup'
          element:<CompanyRegister/>
        },
       
      ]

    },
   
  ],
},

{
  path:'/mart',
  element:<Agrimart/>,
  children: [
    {
      path: 'form', // Nested route: '/farmer/signup'
      element:<Layout/>,
      children:[
        {
          path: 'signup', // Nested route: '/farmer/signup'
          element:<BuyerLogin/>
        },
        {
          path: 'login', // Nested route: '/farmer/signup'
          element:<BuyerRegister/>
        },
       
      ]

    },
   
  ],
},

// {
//   path:'*',
//   element: <FarmerSignUpForm/>,
// },
]
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
     <MyContextProvider>
   <RouterProvider router={react}>
   </RouterProvider>
   </MyContextProvider>
  // </StrictMode>,
)
