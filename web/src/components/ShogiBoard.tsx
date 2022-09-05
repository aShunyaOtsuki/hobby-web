import React from "react";
import "../App.css";
import { initialShogiPlaces } from "../data/shogi";

export const ShogiBoard = () => {
  return (
    <div>
      <div className="ShogiBoard">
        {[1, 2, 3, 4, 5].flatMap((i) => {
          return [1, 2, 3, 4, 5].map((j) => {
            const komaPlaceIndex = `${6 - j}${i}`;
            if (i <= 2) {
              return (
                <div key={komaPlaceIndex} className="KomaPlace">
                  {`${6 - j}${i}`}
                  <br />
                  <Koma i={i} j={j}></Koma>
                </div>
              );
            }
            return (
              <div key={komaPlaceIndex} className="KomaPlace">
                {`${6 - j}${i}`}
                <br />
                <Koma i={i} j={j}></Koma>
              </div>
            );
          });
        })}
      </div>
    </div>
  );
};

type KomaProps = { i: number; j: number };
const Koma: React.FC<KomaProps> = ({ i, j }: { i: number; j: number }) => {
  if (i <= 2) {
    return <p className="KomaGote">{initialShogiPlaces[i - 1][j - 1]}</p>;
  }
  return <p className="KomaSente">{initialShogiPlaces[i - 1][j - 1]}</p>;
};
