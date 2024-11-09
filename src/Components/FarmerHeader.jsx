import React, { useContext } from 'react'

import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import MyContext from '../Context/MyContext'

const FarmerHeader = () => {

const {isOpen,setIsOpen,toggleSidebar} = useContext(MyContext);


  return (
    <>
      <header className='head'>

        <div className='svg'>
          <img className="logo" src={logo} alt="logo" />
        </div>

        <div className='nav'>
          <ul>
            <li><Link to="/" className='active'>Home</Link></li>
            <li><Link to="" onClick={scroll} className='active'>Services</Link></li>
            <li><Link to="#" className='active'>Farmer Shop</Link></li>
            <li className='nav-drop'><Link to="#"  >Information</Link>
              <ul className='dropdown-menu'>
                <li><Link to="#">Market Prices</Link></li>
                <li><Link to="#">Weather</Link></li>
                <li><Link to="#">Government Schemes</Link></li>
                <li><Link to="#">Farming Techniques</Link></li>
                <li><Link to="#">Expert call</Link></li>
              </ul>
            </li>




            <li><Link to="" className='active'>Profile</Link></li>
            {/* <li><Link to="#" className='active'>Farmer Shop</Link></li> */}
            {/* <li><Link to="" className='active'>Company Corner</Link></li> 
       <li><Link to="" className='active'>Farmer Corner</Link></li> */}
            {/* <li><Link to="" className='active'>AgriMart</Link></li> */}
          </ul>
        </div>
        <div className='side-button'>
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-layout-text-sidebar" viewBox="0 0 16 16" onClick={toggleSidebar}>
  <path d="M3.5 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM3 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm12-1v14h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-1 0H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9z"/>
  </svg>
   </div>
    
      </header>

    </>
  )
}

export default FarmerHeader