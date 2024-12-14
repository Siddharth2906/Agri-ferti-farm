import React from 'react'

import scheme from "../images/content3image/scheme.jpeg"
import expert from "../images/content3image/governmentscheme.jpg"
import weather from '../images/content3image/weather.webp'
import soil from "../images/content3image/soil.avif"
const Content5 = () => {
  return (
  <>
  <section  className='outer-Content5'>
    <h1>Farmer Corner</h1>
    <p>
    "Farmer Corner" is a dedicated space aimed at empowering farmers with the knowledge, tools, and resources they need to thrive</p>
  <div className='Content5'>
    <div className='Content5-box1' id='unhide-box'>
    <img src={expert} alt="" />
    </div>
    
    <div className='Content5-box2' >

     <div className='Content5-box2-container-1'>

     <div className='Content5-box1'>
     <img src={soil} alt="" />
     </div>

     <div className='Content5-box1'>
     <img src={scheme} alt="" />
    </div>
     </div>

     <div className='Content5-box2-container-2'>
     <div className='content5-in'>
     <h3>The Farmer Corner is a dedicated space where farmers can access vital information and resources</h3>
       
        <ul>
          <li>
            Weather forcast
          </li>
          <li>
          Government Schemes
          </li>
          <li>
           Farming Techniques
          </li>
          <li>
           Expert Advice
          </li>
          <li>
          Market prices
          </li>
        </ul>
     </div>
     </div>
    </div>

    <div className='Content5-box1' id='hide-box1'>
    <img src={weather} alt="" />
    </div>

    <div className='Content5-box1' id='hide-box'>
     <img src={expert} alt="" />
    </div>
     


    </div>
    
  </section>

  </>
  )
}

export default Content5