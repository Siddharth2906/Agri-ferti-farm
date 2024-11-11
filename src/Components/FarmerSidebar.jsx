import React, { useContext } from 'react'
import './Sidebar.css';
import { Link } from 'react-router-dom'
import MyContext from '../Context/MyContext';
const FarmerSidebar = () => {
  const {isOpen,setIsOpen,toggleSidebar}=useContext(MyContext)
  return (
    <>
            

            {/* Sidebar menu, only visible in mobile view */}
            <div className="sidebar open">
            <ul>
            <li><Link to="/" className='active' onClick={toggleSidebar}>Home</Link></li>
            <li><Link to="" onClick={toggleSidebar} className='active' >Services</Link></li>
            <li><Link to="#" className='active' onClick={toggleSidebar}>Farmer Shop</Link></li>
            <li className='nav-drop'><Link to="#" >Information</Link>
              <ul className='dropdown-menu'>
                <li><Link to="#" onClick={toggleSidebar}>Market Prices</Link></li>
                <li><Link to="#" onClick={toggleSidebar}>Weather</Link></li>
                <li><Link to="#" onClick={toggleSidebar}>Government Schemes</Link></li>
                <li><Link to="#" onClick={toggleSidebar}>Farming Techniques</Link></li>
                <li><Link to="#" onClick={toggleSidebar}>Expert call</Link></li>
              </ul>
            </li>




            <li><Link to="" className='active'>Profile</Link></li>
            {/* <li><Link to="#" className='active'>Farmer Shop</Link></li> */}
            {/* <li><Link to="" className='active'>Company Corner</Link></li> 
       <li><Link to="" className='active'>Farmer Corner</Link></li> */}
            {/* <li><Link to="" className='active'>AgriMart</Link></li> */}
          </ul>
            </div>
            </>
  )
}

export default FarmerSidebar