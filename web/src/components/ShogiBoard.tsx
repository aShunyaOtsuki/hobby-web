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
                <div key={komaPlaceIndex} className="KomaPlace KomaGote">
                  {`${6 - j}${i}`}
                  <br />
                  {initialShogiPlaces[i - 1][j - 1]}
                </div>
              );
            }
            return (
              <div key={komaPlaceIndex} className="KomaPlace KomaSente">
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
