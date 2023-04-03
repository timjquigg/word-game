import SearchSquare from "./searchSquare";
import SubmitButton from "./submitButton";
import InputProvider from "@/providers/inputProvider";

export default function Search() {
  const searchSquares = Array(5)
    .fill("")
    .map((el, index) => {
      return <SearchSquare key={index} id={index} />;
    });

  return (
    <>
      <InputProvider>
        {searchSquares}
        <SubmitButton>Submit</SubmitButton>
      </InputProvider>
    </>
  );
}
