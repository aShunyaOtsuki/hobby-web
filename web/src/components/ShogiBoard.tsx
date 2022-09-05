import "../App.css";
import { initialShogiPlaces } from "../data/shogi";

export const ShogiBoard = () => {
  return (
    <div>
      <div className="ShogiBoard">
        {[1, 2, 3, 4, 5].flatMap((i) => {
          return [1, 2, 3, 4, 5].map((j) => {
            return (
              <div className="KomaPlace">
                {`${6 - j}${i}`}
                <br />
                {initialShogiPlaces[i - 1][j - 1]}
              </div>
            );
          });
        })}
      </div>
    </div>
  );
};
