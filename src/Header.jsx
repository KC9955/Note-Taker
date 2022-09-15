import React from "react";
import image from './image.png';
import image1 from './image1.png';

function Header() {
  return (
    <header>
<nav class="navbar  justify-content-between">
<img src={image} alt="logo"/>
<span classname="navbar-text">
      Hello , Jenny
      </span>
      <img src={image1} alt="logo" className="image1"/>
    </nav>
    </header>
  );
}

export default Header;
