import React from 'react'
import { Link } from 'react-router-dom'

const Content2 = () => {
    return (
        <>
            <section >
                <div className='content2'>
                <div className='box1'>
                    <div>
                        <h2>What We Do</h2>
                        <h1>Currently we are selling and buying crops and food</h1>
                    </div>
                </div>
                
                <div className='box2'>
                    <p> we connect farmers and consumers in a secure marketplace for buying and selling crops and food. Our platform ensures fair prices for farmers and quality products for buyers, with an easy-to-use interface for seamless transactions. Join us today and support sustainable agriculture.

                    </p>
                    <p className='discover'><Link>Discover more</Link></p>
                </div>
                </div>
                <div className='content2-2'>
                    <h1>Healthy Life With Fresh Product</h1>
                </div>
            </section>
        </>
    )
}

export default Content2