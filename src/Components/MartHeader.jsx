import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
const MartHeader = () => {
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
            <li><Link to="#" className='active'>Products</Link></li>
            
            <li className='nav-drop'><Link to="#">Product Info</Link>
              <ul className='dropdown-menu'>
                <li><Link to="#">Orders</Link></li>
                <li><Link to="#">Wishlist</Link></li>
                <li><Link to="#">Rewards</Link></li>
                {/* <li><Link to="#">Government Schemes</Link></li>
                <li><Link to="#">Farming Techniques</Link></li>
                <li><Link to="#">Expert call</Link></li> */}
              </ul>
            </li>
            <li><Link to="" className='active'>My Profile</Link></li>
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

export default MartHeader