import React from "react";
import "../components/game-cover.css";

export const GameCover = ({ image = "" }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="game-cover"
    ></div>
  );
};
