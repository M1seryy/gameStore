import classNames from "classnames";
import React from "react";
import "../components/button.css";

export const Button = ({ onclick, type, children, size = "s" }) => {
  const btnClass = classNames({
    btn: true,
    "btn-secondary": type === "secondary",
    "btn-primary": type === "primary",
    "btn-small": size === "s",
    "btn-medium": size === "m",
  });
  return (
    <div>
      <button className={btnClass} onclick={onclick}>
        {children}
      </button>
    </div>
  );
};
