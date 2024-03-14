'use client'
import React, { useEffect } from 'react';
import './Card_slider.css';
import grid1 from "../../../../image/photo-1552650272-b8a34e21bc4b.jpeg";
import slider1image from '../../../../image/slider1image.jpeg';
import slider2image from '../../../../image/slider2image.jpeg';
import image_container from '../../../../image/image_video.JPG'
import slider3 from '../../../../image/slider3.jpeg'
import slider4 from '../../../../image/slider4.jpeg'
import Image from "next/image";

export default function Card_slider() {
  useEffect(() => {
    const handleScroll = () => {
      // Get the vertical scroll position
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // Get the maximum scroll height
      const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Calculate the horizontal scroll amount based on the difference between the maximum scroll height and the current scroll position
      const scrollAmount = (maxScrollHeight - scrollTop) * 0.5; // Adjust this multiplier as needed

      // Set the horizontal scroll position
      const container = document.querySelector('.container_card_slider');
      if (container) {
        container.scrollLeft = scrollAmount;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='heading_card_slider'>
        <strong>Wellness in Pictures</strong>
      </div>
      <div className='container_card_slider'>
        <div className='grid_card_slider'>
          <div className='grid_1'>
            <Image src={slider2image} className='grid_1_image' alt="Grid Image" />
          </div>
          <div className='grid_1'>
            <Image src={slider1image} className='grid_1_image' alt="Grid Image" />
          </div>
          <div className='grid_1' >
            <Image src={slider1image} className='grid_1_image' alt="Grid Image" />
          </div>
          <div className='grid_1' >
            <Image src={slider4} className='grid_1_image' alt="Grid Image" />
          </div>
          <div className='grid_1'>
            <Image src={slider3} className='grid_1_image' alt="Grid Image" />
          </div>
        </div>
      </div>
      <div className='line_moving'>
         <h1> Expert Articles Galore *
          Holistic Tips Bonanza *
          Empowering Resources Hub *
          Supportive Community Vibes *
          Inspiring Wellness Journey *
          Trusted Health Oasis * </h1>
      </div>

      <div className='video_container'>
        <Image src={image_container} className='video_container'/>

      </div>
    </>
  );
}