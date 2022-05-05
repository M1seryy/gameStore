import React from "react";
import { Link } from "react-router-dom";
import "../components/header.css";
import { CartBlock } from "./CartBlock";

export const Header = () => {
  return (
    <div className="header">
      <div className="warpper">
        <Link className="header__store-title" to="/">
          GameStore
        </Link>
      </div>
      <div className="wrapper header__cart-btn-wrapper">
        <CartBlock />
      </div>
    </div>
  );
};
