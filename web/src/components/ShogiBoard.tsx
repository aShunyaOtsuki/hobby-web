import "../App.css";

export const ShogiBoard = () => {
  return (
    <div>
      <div className="ShogiBoard">
        {[1, 2, 3, 4, 5].flatMap((i) => {
          return [1, 2, 3, 4, 5].map((j) => {
            return <div className="KomaPlace">{`${i}${6 - j}`}</div>;
          });
        })}
      </div>
    </div>
  );
};
