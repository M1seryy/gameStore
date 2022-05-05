import React from "react";
import "..//components/cartBlock.css";
import { BiCartAlt } from "react-icons/bi";

export const CartBlock = () => {
  return (
    <div className="cart-block">
      <BiCartAlt size={25} className="cart-block__icon" />
      <span className="cart-block__total-price">2399 гривнів</span>
    </div>
  );
};
