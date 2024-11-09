import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import UseSidebar from '../Hooks/UseSidebar';
import MyContext from '../Context/MyContext';

const Sidebar = ({ scroll  }) => {
    const {isOpen,setIsOpen,toggleSidebar}=useContext(MyContext)
    return (
       <>
            

            {/* Sidebar menu, only visible in mobile view */}
            <div className="sidebar open">
                <ul>
                    <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
                    <li><Link to="#" onClick={() => {scroll();toggleSidebar();}}>Services</Link></li>
                    <li><Link to="/company" onClick={toggleSidebar}>Company Corner</Link></li>
                    <li><Link to="/farmer" onClick={toggleSidebar}>Farmer Corner</Link></li>
                    <li><Link to="/mart" onClick={toggleSidebar}>AgriMart</Link></li>
                </ul>
            </div>
            </>
    );
};

export default Sidebar;
