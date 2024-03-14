import React from "react";
import "./Header.css";
import headerImage from "../../../../image/photo-1552650272-b8a34e21bc4b.jpeg";
import Image from "next/image";

export default function Header() {
  return (
    <header id="header">
      <div class="container_header">
        <div className="left_side">
        <Image src={headerImage} alt="Header Image" width={"80"} className="header_image"/>
          <h1 className="h1_header">Wellvibe</h1>
        </div>
        <div className="menu_between">
          <p className="bet_menu_p">Articles</p>
          <p className="bet_menu_p">Tips</p>
          <p className="bet_menu_p">Resources</p>
        </div>
        <div className="Right_side">
          <button>Explore</button>
        </div>
      </div>
    </header>
  );
}
