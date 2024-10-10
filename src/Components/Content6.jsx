import React from 'react'
import earth from"../images/Earth.png"
import cloud from"../images/clooud.png"
const Content6 = () => {
  return (
    <>
  <div className='content-5-image'>
  <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>
<h1>
Reachout To Our Offices Your Nearby Location</h1>
    <p>Our Offices  also provide all the resource fertilizer and agriculture equipment which are available on this platform </p>
  

  <img src={earth} alt="earth"  className='earth'/>
  
    </div>
    </>
  )
}

export default Content6