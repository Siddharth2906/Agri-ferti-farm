import React from 'react'
import { Link, useRoutes } from 'react-router-dom';
const Nav = () => {

  return (
   <>
    <div className='nav1'>
        <Link to={"form/login"}>Login</Link>
        <Link to={"form/signup"}>Sign up</Link>
    </div>
   </>
  )
}

export default Nav