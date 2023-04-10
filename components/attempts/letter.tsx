type Props = {
  letter: LetterCheck;
  delay: number;
};

export default function Letter(props: Props) {
  let style =
    "w-7 h-7 rounded-lg flex justify-center items-center ease-in-out ";
  switch (Object.values(props.letter)[0]) {
    case "correct":
      style += "bg-green-500 ";
      break;
    case "absent":
      style += "bg-red-500 ";
      break;
    case "present":
      style += "bg-yellow-500 ";
      break;
    default:
      style += "";
  }

  switch (props.delay) {
    case 0:
      style += `animate-[bounce_1000ms_ease-in-out_0s_1.5] `;
      break;
    case 1:
      style += `animate-[bounce_1000ms_ease-in-out_100ms_1.5] `;
      break;
    case 2:
      style += `animate-[bounce_1000ms_ease-in-out_200ms_1.5]  `;
      break;
    case 3:
      style += `animate-[bounce_1000ms_ease-in-out_300ms_1.5]  `;
      break;
    case 4:
      style += `animate-[bounce_1000ms_ease-in-out_400ms_1.5] `;
      break;
  }

  return (
    <>
      <div className={style}>
        <p className="m-0">{Object.keys(props.letter)[0]}</p>
      </div>
    </>
  );
}
