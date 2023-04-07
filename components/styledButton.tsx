"use client";

type Props = {
  children?: string;
  id?: string;
  callback: () => void;
};

export default function StyledButton(props: Props) {
  return (
    <button
      id={props.id}
      onClick={props.callback}
      autoFocus={false}
      className="bg-sky-600 rounded-lg min-w-[10rem] p-2 drop-shadow-md opacity-90 hover:drop-shadow-xl focus:outline-none focus:drop-shadow-xl hover:opacity-100 focus:opacity-100"
    >
      {props.children}
    </button>
  );
}
