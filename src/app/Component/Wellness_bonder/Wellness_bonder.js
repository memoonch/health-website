import React from "react";
import image1 from "../../image/image_four1.jpeg";
import image2 from '../../image/fourimage2.jpeg';
import image3 from '../../image/fourimage3.jpeg';
import image4 from '../../image/fourimage5.jpeg';
import Image from "next/image";
import './Wellness_bonder.css'
export default function Wellness_bonder() {
  return (
    <div className="container_Full_wellness">
      <div className="heading_welness">
        <h1>Wellness Wonders</h1>
      </div>
      <div className="container_three_type">
        <div className="div1_three_type">
          <Image src={image1} alt="image1" className="image1_three_type" />
          <h1>Fuel Your Body Right</h1>
          <p className="p_data">March 13, 2024</p>
          <p className="p_taxt">
            Discover delicious recipes and expert tips to nourish your body and
            boost your energy levels
          </p>
          <button>Explore</button>
        </div>
      <div className="div1_three_type">
          <Image src={image2} alt="image1" className="image1_three_type" />
          <h1>Mind Matters</h1>
          <p className="p_data">March 13, 2024</p>
          <p className="p_taxt">
            Discover delicious recipes and expert tips to nourish your body and
            boost your energy levels
          </p>
          <button>Explore</button>
        </div>
        <div className="div1_three_type">
          <Image src={image3} alt="image1" className="image1_three_type" />
          <h1>Fitness Fun</h1>
          <p className="p_data">March 13, 2024</p>
          <p className="p_taxt">
            Discover delicious recipes and expert tips to nourish your body and
            boost your energy levels
          </p>
          <button>Explore</button>
        </div>
        <div className="div1_three_type">
          <Image src={image4} alt="image1" className="image1_three_type" />
          <h1>Healthy Habits</h1>
          <p className="p_data">March 13, 2024</p>
          <p className="p_taxt">
            Discover delicious recipes and expert tips to nourish your body and
            boost your energy levels
          </p>
          <button>Explore</button>
        </div>
    </div>
    </div>

  );
}
