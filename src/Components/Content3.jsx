import React from 'react'
import fertilizer from "../images/content3image/fertilizerimage.jpeg"
import pesticides from "../images/content3image/pesticide.jpg"
import  component from "../images/content3image/equipment and components.avif"
import equipment from "../images/content3image/equipment.avif"
const Content3 = () => {
  return (
    <>
    <section className='content3'>
    <h2>
        Farmer Shop
    </h2>
    <h1>Our Core Service For Farmer</h1>
    <p>Our Farmer Shop is a one-stop-shop for all your farming needs. We offer 
        a wide range of products and services to help you grow and harvest your crops 
        effeciently.</p>
        <div className='content3-card-container'>
         <div className='card3'> <img src={fertilizer} alt="" /> <div className='inner-card3'><div className='card3-in'><h1>Fertilizer</h1></div></div></div>
         <div className='card3'> <img src={pesticides} alt="" /> <div className='inner-card3'><div className='card3-in'><h1>Pesticides</h1></div></div> </div>
         <div className='card3'> <img src={equipment} alt="" /> <div className='inner-card3'><div className='card3-in'><h1>Agricultural component</h1></div></div></div>
         <div className='card3'> <img src={component} alt="" /> <div className='inner-card3'><div className='card3-in'><h1>Farming equipment</h1></div></div></div>
       

        </div>
        </section>
        
    </>
  )
}

export default Content3