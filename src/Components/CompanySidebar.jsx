import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MyContext from '../Context/MyContext'
const CompanySidebar = () => {
  const {isOpen,setIsOpen,toggleSidebar}=useContext(MyContext)
  return (
    <>
            

    {/* Sidebar menu, only visible in mobile view */}
    <div className="sidebar open">
    <ul>
          <li><Link to="/" className='active' onClick={toggleSidebar}>Home</Link></li>
          <li><Link to="" onClick={()=>{toggleSidebar()}} className='active' >Services</Link></li>
          <li><Link to="#" className='active' onClick={toggleSidebar}>Company</Link></li>
          <li className='nav-drop'><Link to="#" onClick={toggleSidebar}>Product Service</Link>
            <ul className='dropdown-menu'>
              <li><Link to="#" onClick={toggleSidebar}>Add Product</Link></li>
              <li><Link to="#" onClick={toggleSidebar}>List of Product</Link></li>
             
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

export default CompanySidebar