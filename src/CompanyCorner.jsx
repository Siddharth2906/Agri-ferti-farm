import React, { useContext } from 'react'


import MyContext from './Context/MyContext'
import Nav from './Components/Nav';
import CompanyHeader from './Components/CompanyHeader';
import CompanySidebar from './Components/CompanySidebar';
import ErrorPage from './Components/FarmerSignUpForm';
import FarmerRegister from './Components/FarmerShop/FarmerRegister';
import { Outlet } from 'react-router-dom';


// import FarmerSignUpForm from './Components/FarmerSignUpForm'

const CompanyCorner = () => {
  const {isOpen,setIsOpen,toggleSidebar} = useContext(MyContext);
  return (
   <>
   <Nav/>
   <CompanyHeader/>
   {isOpen?<CompanySidebar/>:""}
 <Outlet/>
   </>
  )
}

export default CompanyCorner