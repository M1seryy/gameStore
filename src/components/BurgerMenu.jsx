import React, { useState } from "react";
import "../components/burgerMenu.css";
import backgroundImg from "../logoes//hamburger-menu-icon-svg-14.jpg";

export const BurgerMenu = () => {
  const [visibility, setVisibility] = useState(true);
  function show() {
    setVisibility(!visibility);
  }

  if (visibility) {
    return (
      <div>
        <img onClick={show} className="logo" src={backgroundImg} alt="" />
        <nav>
          <a id="flex-item" href="#">
            Main
          </a>
          <a id="flex-item" href="#">
            My Library
          </a>
          <a id="flex-item" href="#">
            Community
          </a>
          <a id="flex-item" href="#">
            Home Page
          </a>
          <a id="flex-item" href="#">
            My Profile
          </a>
        </nav>
      </div>
    );
  }
  if (!visibility) {
    return (
      <div>
        <img onClick={show} className="logo" src={backgroundImg} alt="" />
      </div>
    );
  }
};
