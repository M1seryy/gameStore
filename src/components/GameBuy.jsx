import React from "react";
import "../components/game-buy.css";
import { Button } from "../components/Button";

export const GameBuy = ({ game }) => {
  return (
    <div className="game-buy">
      <span className="game-buy__price">{game.price} грн</span>
      <Button onclick={() => null} type="primary">
        В корзину
      </Button>
    </div>
  );
};
