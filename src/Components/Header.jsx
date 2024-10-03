import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <header className='head'>
      
<div className='svg'>
  <img  className="logo" src={logo} alt="logo" />
</div>

  <div className='nav'>
    <ul>
      <li><Link to="/" className='active'>Home</Link></li>
      <li><Link to="#" className='active'>Services</Link></li>
      <li><Link to="#" className='active'>Farmer Shop</Link></li>
       <li><Link to="" className='active'>Government Scheme</Link></li> 
       <li><Link to="" className='active'>Farmer Corner</Link></li>
       <li><Link to="" className='active'>AgriMart</Link></li>
    </ul>
  </div>
   
    </header>

    </>
    
  )
}

export default Header