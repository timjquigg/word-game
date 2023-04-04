type Props = {
  letter: LetterCheck;
};

export default function Row(props: Props) {
  const letter = props.letter;
  let style = "w-6 h-6 rounded-lg ";
  switch (Object.values(letter)[0]) {
    case "correct":
      style += "bg-green-500";
      break;
    case "absent":
      style += "bg-red-500";
      break;
    case "present":
      style += "bg-yellow-500";
      break;
  }
  return (
    <div className={style}>
      <p className="text-center">{Object.keys(letter)[0]}</p>
    </div>
  );
}
