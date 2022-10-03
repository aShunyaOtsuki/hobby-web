import React from "react";
import "../App.css";
import { Board } from "../game/shogi";

export const ShogiBoard = () => {
  const board = new Board();
  return (
    <div>
      <div className="ShogiBoard">{board.createBoard()}</div>
    </div>
  );
};
