import React, { useContext } from 'react'
import MyContext from '../Context/MyContext';
import { Link } from 'react-router-dom'
import './Sidebar.css';
const MartSidebar = () => {
    const {isOpen,setIsOpen,toggleSidebar}=useContext(MyContext)
    return (
       <>
            

            {/* Sidebar menu, only visible in mobile view */}
            <div className="sidebar open">
            <ul>
            <li><Link to="/" className='active' onClick={toggleSidebar}>Home</Link></li>
            <li><Link to="" onClick={toggleSidebar} className='active'>Services</Link></li>
            <li><Link to="#" className='active' onClick={toggleSidebar}>Products</Link></li>
            
            <li className='nav-drop'><Link to="#">Product Info</Link>
              <ul className='dropdown-menu'>
                <li><Link to="#" onClick={toggleSidebar}>Orders</Link></li>
                <li><Link to="#" onClick={toggleSidebar}>Wishlist</Link></li>
                <li><Link to="#" onClick={toggleSidebar}>Rewards</Link></li>
                {/* <li><Link to="#">Government Schemes</Link></li>
                <li><Link to="#">Farming Techniques</Link></li>
                <li><Link to="#">Expert call</Link></li> */}
              </ul>
            </li>
            <li><Link to="" className='active' onClick={toggleSidebar}>My Profile</Link></li>
            {/* <li><Link to="#" className='active'>Farmer Shop</Link></li> */}
            {/* <li><Link to="" className='active'>Company Corner</Link></li> 
       <li><Link to="" className='active'>Farmer Corner</Link></li> */}
            {/* <li><Link to="" className='active'>AgriMart</Link></li> */}
          </ul>
            </div>
            </>
    );
}
export default MartSidebar