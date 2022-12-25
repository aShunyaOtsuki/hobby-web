import { useState } from "react";

const komaType = ["歩", "銀", "金", "角", "飛", "玉"] as const;
type KomaType = typeof komaType[number];
const places = [
  [0, 0], // 持ち駒の場所
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [2, 1],
  [2, 2],
  [2, 3],
  [2, 4],
  [2, 5],
  [3, 1],
  [3, 2],
  [3, 3],
  [3, 4],
  [3, 5],
  [4, 1],
  [4, 2],
  [4, 3],
  [4, 4],
  [4, 5],
  [5, 1],
  [5, 2],
  [5, 3],
  [5, 4],
  [5, 5],
] as const;
type Place = typeof places[number];
type Koma = {
  komaType: KomaType;
  place: Place;
};

const samePlace = (a: Place, b: Place): boolean => {
  return a[0] === b[0] && a[1] === b[1];
};

abstract class Player {
  komas: Koma[];
  constructor(komas: Koma[]) {
    this.komas = komas;
  }
  move(currentPlace: Place, nextPlace: Place) {
    const koma = this.komas.find((koma) => samePlace(koma.place, currentPlace));
    if (koma == null) throw new Error();

    this.komas = this.komas
      .filter((koma) => !samePlace(koma.place, currentPlace))
      .concat({ komaType: koma.komaType, place: nextPlace });
  }

  findKoma(komaPlace: Place) {
    return this.komas.find((koma) => samePlace(koma.place, komaPlace));
  }
}

const SENTE_INITIAL_KOMA: Koma[] = [
  {
    komaType: "歩",
    place: [5, 4],
  },
  {
    komaType: "銀",
    place: [3, 5],
  },
  {
    komaType: "金",
    place: [4, 5],
  },
  {
    komaType: "角",
    place: [2, 5],
  },
  {
    komaType: "飛",
    place: [1, 5],
  },
  {
    komaType: "玉",
    place: [5, 5],
  },
];
export class Sente extends Player {
  constructor() {
    super(SENTE_INITIAL_KOMA);
  }
}
const GOTE_INITIAL_KOMA: Koma[] = [
  {
    komaType: "歩",
    place: [1, 2],
  },
  {
    komaType: "銀",
    place: [3, 1],
  },
  {
    komaType: "金",
    place: [2, 1],
  },
  {
    komaType: "角",
    place: [4, 1],
  },
  {
    komaType: "飛",
    place: [5, 1],
  },
  {
    komaType: "玉",
    place: [1, 1],
  },
];
export class Gote extends Player {
  constructor() {
    super(GOTE_INITIAL_KOMA);
  }
}

type Teban = "sente" | "gote";

export const Board = () => {
  const [sente, setSente] = useState(new Sente());
  const [gote, setGote] = useState(new Gote());
  const [teban, setTeban] = useState<Teban>("sente");
  const [currentPlace, setCurrentPlace] = useState<Place | null>(null);

  const handleClick = (komaPlace: Place) => {
    return () => {
      const player: Player = teban === "sente" ? sente : gote;
      const setPlayer = teban === "sente" ? setSente : setGote;
      const nextTeban: Teban = teban === "sente" ? "gote" : "sente";
      // 駒が選択されていた場合
      if (currentPlace != null) {
        player.move(currentPlace, komaPlace);
        setPlayer(player);
        setCurrentPlace(null);
        setTeban(nextTeban);
        return;
      }
      // 駒が未選択の場合
      const playerKoma = player.findKoma(komaPlace);
      if (playerKoma != null) {
        setCurrentPlace(komaPlace);
      }
    };
  };

  return (
    <div className="ShogiBoard">
      {[1, 2, 3, 4, 5].flatMap((i) => {
        return [1, 2, 3, 4, 5].map((j) => {
          const komaPlace: Place = [6 - j, i] as any;
          const komaPlaceKey = komaPlace.toString();
          return (
            <div
              key={komaPlaceKey}
              className="KomaPlace"
              onClick={handleClick(komaPlace)}
            >
              {`${6 - j}${i}`}
              <br />
              <p className="KomaSente">{sente.findKoma(komaPlace)?.komaType}</p>
              <p className="KomaGote">{gote.findKoma(komaPlace)?.komaType}</p>
            </div>
          );
        });
      })}
      <p>teban: {teban}</p>
    </div>
  );
};
