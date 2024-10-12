import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
 <>
 <section className='upper-footer'>
 <div className='footer-block1'>
 <img  className="logo" src={logo} alt="logo" />

 <div className='inner-block1'>
<Link><i class="bi bi-facebook"></i></Link>
<Link><i class="bi bi-instagram"></i></Link>
<Link><i class="bi bi-linkedin"></i></Link>
<Link><i class="bi bi-whatsapp"></i></Link>
 </div>
 </div>

 </section>
 </>
  )
}

export default Footer