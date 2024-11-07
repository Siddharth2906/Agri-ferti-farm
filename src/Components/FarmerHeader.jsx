import React from 'react'

import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

const FarmerHeader = () => {


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

      </header>

    </>
  )
}

export default FarmerHeader