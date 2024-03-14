import React from 'react'
import imagefeed from '../../image/imagefeedback1.jpeg'
import Mux from '../../image/Mux.jpeg';
import Leno from '../../image/Leno.jpeg';
import Leo from '../../image/Leo.jpeg'
import eth from '../../image/Ethan.jpeg'
import Image from "next/image";
import './UserFeedback.css'
export default function UserFeedback() {
  return (
    <div className='container_feedback'>
        <div className='header_feedback'>
            <h1> Inspire  </h1>
        </div>
      <div className='feedback_sub_container'>
        <div className='top_conatiner'>
             <div className='first_feedback'>
                <p>The blog changed my life! I feel healthier, happier, and more motivated than ever before.</p>
                <div className='image_head'>
                    <Image src={imagefeed} alt='image' className='image_feed'/>
                    <h2>Samantha</h2>
                </div>
             </div>
             <div className='first_feedback'>
                <p>I never knew self-care could be so empowering. Thank you for the eye-opening articles!.</p>
                <div className='image_head'>
                    <Image src={Mux} alt='image' className='image_feed'/>
                    <h2>Mux</h2>
                </div>
             </div>
             <div className='first_feedback'>
                <p>Reading the blog has been a game-changer for my mental well-being. I'm forever grateful!</p>
                <div className='image_head'>
                    <Image src={Leno} alt='image' className='image_feed'/>
                    <h2>Luna</h2>
                </div>
             </div>
        </div>
        <div className='bottom_conatiner'>
        <div className='top_conatiner'>
             <div className='first_feedback'>
                <p>The blog changed my life! I feel healthier, happier, and more motivated than ever before.</p>
                <div className='image_head'>
                    <Image src={eth} alt='image' className='image_feed'/>
                    <h2>Ethan</h2>
                </div>
             </div>
             <div className='first_feedback'>
                <p>The community here is like a breath of fresh air. I've found my tribe for wellness support!.</p>
                <div className='image_head'>
                    <Image src={imagefeed} alt='image' className='image_feed'/>
                    <h2>Isabel</h2>
                </div>
             </div>
             <div className='first_feedback'>
                <p>The stories shared here resonate with me on a deep level. It's like having a personal cheerleader in my wellness journey!.</p>
                <div className='image_head'>
                    <Image src={Leo} alt='image' className='image_feed'/>
                    <h2>Leo</h2>
                </div>
             </div>
        </div>
</div>
</div>  
    </div>
  )
}
