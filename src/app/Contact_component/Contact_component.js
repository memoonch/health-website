import React from 'react'
import mapgoogle from '../image/googlemap.JPG'
import Image from "next/image";
import './Contact.css'

export default function Contact() {
  return (
    <div className='container_con'>
        <div className='left_side_contact'>
            <h1>Contact Us</h1>
         <div className='all_p'> 
           <p>Phone: 123-456-7890</p>
            <p>Email: info@healthwellnessblog.com</p>
            <p>Address: Rawalpindi Pakistan</p>
            <p>Working Hours: Mon-Fri: 9am-5pm</p>
            </div> 
        </div>
        <div className='right_side'>
           <Image src={mapgoogle} className="googlemap"/>
        </div>
    </div>
  )
}
