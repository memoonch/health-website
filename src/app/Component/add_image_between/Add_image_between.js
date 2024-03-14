import React from 'react'
import imgback from '../../image/background_image.jpeg'
import './Add_image_between.css'
import Image from "next/image";

export default function Add_image_between() {
  return (
    <div className='image_container_back'>
                <Image src={imgback} alt="imageback"  className="image_back"/>

    </div>
  )
}
