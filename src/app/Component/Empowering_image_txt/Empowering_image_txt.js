import React from 'react'
import Image from 'next/image'
import image_empower from '../../image/image_empower.jpeg'
import './Empowering_image_txt.css'

export default function Empowering_image_txt() {
  return (
    <div className='container_emp'>
        <div className='text-container-sub'> 
        <div className='image_emp'>
         <Image src={image_empower} alt="Empowering Image" className="image_empower"/>
        </div>
        <div className='txt_emp'>
            <div className='txt_emp_2'>
               <h1>Empowering Wellness<br/> Choices</h1>
              <div className='para'>
                <p className='p1'>Welcome to our vibrant health and wellness hub, where we ignite the spark for a healthier you! Dive into a world of expertly crafted articles, tips, and resources designed to revolutionize your well-being journey.</p>
                <p className='p2'>From the latest fitness trends to nourishing nutrition advice, we've got you covered. Explore the depths of mental health and indulge in self-care practices that will leave you glowing from the inside out.</p>
                <p className='p3'>Join our community of wellness warriors as we embark on a quest for holistic health. Let's break barriers, shatter stereotypes, and redefine what it means to thrive in today's fast-paced world.</p>
              </div>
            </div>
             
        </div>
        </div>
    </div>
  )
}