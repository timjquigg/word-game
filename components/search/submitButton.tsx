"use client";

type Props = {
  children?: string;
};

export default function SubmitButton(props: Props) {
  const handleClick = () => {
    //
  };

  return (
    <button id="submit" onClick={handleClick}>
      {props.children}
    </button>
  );
}
