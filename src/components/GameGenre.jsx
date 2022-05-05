import React from "react";
import "../components/gameGenre.css";

export const GameGenre = ({ genre }) => {
  return (
    <div>
      <span className="game-genre">{genre}</span>
    </div>
  );
};
