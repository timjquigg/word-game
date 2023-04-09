"use client";

import { useEffect, useState } from "react";

type Props = {
  letter: LetterCheck;
  delay: number;
};

export default function Letter(props: Props) {
  const delay = 100;
  let initialStyle =
    "w-7 h-7 rounded-lg flex justify-center items-center ease-in-out ";
  switch (Object.values(props.letter)[0]) {
    case "correct":
      initialStyle += "bg-green-500";
      break;
    case "absent":
      initialStyle += "bg-red-500";
      break;
    case "present":
      initialStyle += "bg-yellow-500";
      break;
    default:
      initialStyle += "";
  }

  const [style, setStyle] = useState(initialStyle);

  useEffect(() => {
    switch (props.delay) {
      case 0:
        setStyle((prev) => prev + ` animate-bounce animation-delay-[0ms] `);
        break;
      case 1:
        setStyle((prev) => prev + ` animate-bounce animation-delay-[100ms] `);
        break;
      case 2:
        setStyle((prev) => prev + ` animate-bounce animation-delay-[200ms] `);
        break;
      case 3:
        setStyle((prev) => prev + ` animate-bounce animation-delay-[300ms] `);
        break;
      case 4:
        setStyle((prev) => prev + ` animate-bounce animation-delay-[400ms] `);
        break;
    }
  }, [props]);

  useEffect(() => {
    const removeBounce = () => {
      setTimeout(() => {
        setStyle((prev) => prev.replace("animate-bounce", ""));
      }, 500 + delay * props.delay);
    };
    removeBounce();
  }, [props, style]);

  return (
    <>
      <div className={style}>
        <p className="m-0">{Object.keys(props.letter)[0]}</p>
      </div>
    </>
  );
}
// export default function Letter(props: Props) {
//   // const [style, setStyle] = useState("");
//   const delay = 200;
//   let style =
//     "w-7 h-7 rounded-lg flex justify-center items-center ease-in-out ";

//   useEffect(() => {
//   switch (props.delay) {
//     case 0:
//       style += `animate-bounce animation-delay-[0ms] `;
//       break;
//     case 1:
//       style += `animate-bounce animation-delay-[200ms] `;
//       break;
//     case 2:
//       style += `animate-bounce animation-delay-[400ms] `;
//       break;
//     case 3:
//       style += `animate-bounce animation-delay-[600ms] `;
//       break;
//     case 4:
//       style += `animate-bounce animation-delay-[800ms] `;
//       break;
//   }

//   switch (Object.values(props.letter)[0]) {
//     case "correct":
//       style += "bg-green-500";
//       break;
//     case "absent":
//       style += "bg-red-500";
//       break;
//     case "present":
//       style += " bg-yellow-500";
//       break;
//     default:
//       style += "";
//   }
//   }, [props]);

//   useEffect(() => {
//     const removeBounce = () => {
//       setTimeout(() => {
//         style.replace("animate-bounce", "");
//       }, 1000 + delay * props.delay);
//     };
//     removeBounce();
//   }, [props, style]);

//   return (
//     <>
//       <div className={style}>
//         <p className="m-0">{Object.keys(props.letter)[0]}</p>
//       </div>
//     </>
//   );
// }
