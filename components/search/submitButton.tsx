"use client";

type Props = {
  children?: string;
};

export default function SubmitButton({ children = "Submit" }: Props) {
  const handleClick = () => {
    //
  };

  return <button onClick={handleClick}>{children}</button>;
}
