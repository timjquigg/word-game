type Props = {
  letter: LetterCheck;
};

export default function Letter(props: Props) {
  const letter = props.letter;
  let style = "w-7 h-7 rounded-lg flex justify-center items-center ";
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
      <p className="m-0">{Object.keys(letter)[0]}</p>
    </div>
  );
}
