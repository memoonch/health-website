import React from "react";
import image1 from "../../image/image_four1.jpeg";
import image2 from '../../image/image2_wild.jpeg';
import image3 from '../../image/imagewild3.jpeg';
import image4 from '../../image/image_wild1.jpeg';
import Image from "next/image";
import './Mindfullmusing.css'
export default function Mindfullmusing() {
  return (
    <div className="container_Mind">
      <div className="heading_welness_mind">
        <h1>Wellness Wonders</h1>
      </div>
      <div className="container_three_type_mind">
        <div className="div1_three_type_mind">
          <Image src={image1} alt="image1" className="image1_three_type_mind" />
          <p className="p_data_mind">Empower</p>
          <h1>Mind Matters</h1>

          <button>Join</button>
        </div>
      <div className="div1_three_type_mind">
          <Image src={image2} alt="image1" className="image1_three_type_mind" />
        
          <p className="p_data_mind">Revitalize</p>
          <h1>Mind Matters</h1>
          <button>Join</button>
        </div>
        <div className="div1_three_type_mind">
          <Image src={image4} alt="image1" className="image1_three_type_mind" />
          <p className="p_data_mind">Transform</p>
          <h1>Mind Matters</h1>
          <button>Join</button>
        </div>
        
        <div className="div1_three_type_mind">
          <Image src={image3} alt="image1" className="image1_three_type_mind" />
          <p className="p_data_mind">Inspire</p>
          <h1>Mind Matters</h1>
          <button>Join</button>
        </div>

        
    </div>
    </div>

  );
}
