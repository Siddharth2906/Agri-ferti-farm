import React from 'react'
import image1 from "../images/image145.png"
import conten1 from"../images/contentimg.jpg"
import fertilizer from"../images/fertilizer bg.png"
import fruits from"../images/fruitsbg.png"

const Content1 = React.forwardRef((props,ref) => {
  return (
  <section className='content1' ref={ref}>
   
    <div className='box1'>
       <img src={conten1} alt="" />
    </div>
    <div className='box2'>
      <h1>Agriculture For Future Development</h1>
     <p> It aims to enhance agricultural productivity, improve food security, and empower smallholder farmers through better access to resources, markets, and technology</p>
     <ul>
      <li>Sustainable Practices</li>
      <li>Technological Innovation</li>
      <li>Climate Resilience</li>
      <li>Youth Involvement</li>
      <li>Market Access</li>
      <li>Policy Support</li>
     </ul>
    </div>

    <div className='box3'>
    <div className='small-box1'> <img src={fruits} alt="" />
    
    <h2>Quality product </h2>
    <p> Best product for public provided by direct farmer  </p>
    </div>
    <div className='small-box2'> <img src={fertilizer} alt="" />
      <h2>Farming product</h2>
      <p>Fertilizer and modern technology product provided by direct agricultural companies</p>

    </div>
    
    </div>

  </section>
  )
})

export default Content1