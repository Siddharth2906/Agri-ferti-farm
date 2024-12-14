import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import MyContext from '../Context/MyContext'


const Header = ({scroll }) => {

  const{isOpen,setIsOpen,toggleSidebar}=useContext(MyContext)

// console.log(scroll)
  return (
    <>
    <header className='head'>
      
<div className='svg'>
  <img  className="logo" src={logo} alt="logo" />
</div>

  <div className='nav'>
    <ul>
      <li><Link to="/" className='active'>Home</Link></li>
      <li><Link to="#"  onClick={scroll} className='active'>Services</Link></li>
      {/* <li><Link to="#" className='active'>Farmer Shop</Link></li>
       <li><Link to="" className='active'>Government Scheme</Link></li>  */}
      {/* <li><Link to="#" className='active'>Farmer Shop</Link></li> */}
       <li><Link to="/company" className='active'>Company Corner</Link></li> 
       <li><Link to="/farmer" className='active'>Farmer Corner</Link></li>
       <li><Link to="/mart" className='active'>AgriMart</Link></li>
    </ul>
  </div>

   <div className='side-button'>
   {isOpen?<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-backspace-reverse-fill" viewBox="0 0 16 16" onClick={toggleSidebar}>
  <path d="M0 3a2 2 0 0 1 2-2h7.08a2 2 0 0 1 1.519.698l4.843 5.651a1 1 0 0 1 0 1.302L10.6 14.3a2 2 0 0 1-1.52.7H2a2 2 0 0 1-2-2zm9.854 2.854a.5.5 0 0 0-.708-.708L7 7.293 4.854 5.146a.5.5 0 1 0-.708.708L6.293 8l-2.147 2.146a.5.5 0 0 0 .708.708L7 8.707l2.146 2.147a.5.5 0 0 0 .708-.708L7.707 8z"/>
</svg>
:
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-layout-text-sidebar" viewBox="0 0 16 16" onClick={toggleSidebar}>
  <path d="M3.5 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM3 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm12-1v14h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-1 0H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9z"/>
  </svg>
  }
   </div>
    </header>

    </>
    
  )
}

export default Header