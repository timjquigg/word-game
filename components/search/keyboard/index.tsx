import Key from "./key";

const rows: Letter[][] = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

export default function Keyboard() {
  const keyboard = rows.map((row, i) => {
    const keyRow = row.map((key, j) => {
      return <Key key={`key${i}${j}`}>{key}</Key>;
    });
    return (
      <div
        key={`row${i}`}
        className="flex flex-row shrink text-center justify-center space-x-2"
      >
        {keyRow}
      </div>
    );
  });

  return (
    <div className="flex flex-col text-center space-y-2 w-full">{keyboard}</div>
  );
}
