import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import checkWord from "@/helpers/checkWord";
import Search from "@/components/search";

export default function Home() {
  const target = "hello";
  const check = checkWord("helos", "helo");

  const checkMap = check.map((el, index) => {
    return (
      <div key={index}>
        <p style={{ margin: "1rem" }}>
          {Object.keys(el)} - {Object.values(el)}
        </p>
      </div>
    );
  });
  return (
    <main>
      <p>{target}</p>
      <Search />
      <div style={{ display: "flex" }}>{checkMap}</div>
    </main>
  );
}
