import React from 'react'
import { Link, useRoutes } from 'react-router-dom';
const Nav = () => {

  return (
   <>
    <div className='nav1'>
        <Link to={"login"}>Login</Link>
        <Link to={"signup"}>Sign up</Link>
    </div>
   </>
  )
}

export default Nav