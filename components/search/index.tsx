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
        <div className="flex flex-col justify-center content-center">
          <div className="flex justify-center space-x-3 my-3">
            {searchSquares}
          </div>
          <SubmitButton>Submit</SubmitButton>
        </div>
      </InputProvider>
    </>
  );
}
