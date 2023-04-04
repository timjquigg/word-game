"use client";

type Props = {
  children?: string;
  callback: () => void;
};

export default function StyledButton(props: Props) {
  return (
    <button
      id="submit"
      onClick={props.callback}
      autoFocus={false}
      className="bg-sky-600 rounded-lg w-fit p-2 mx-auto drop-shadow-md opacity-90 hover:drop-shadow-xl focus:outline-none focus:drop-shadow-xl hover:opacity-100 focus:opacity-100"
    >
      {props.children}
    </button>
  );
}
