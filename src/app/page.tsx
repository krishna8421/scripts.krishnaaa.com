import { scripts } from "@/data/scripts";
import { IoCopyOutline } from "react-icons/io5";
import { Press_Start_2P } from "next/font/google";
import { HiOutlineDownload } from "react-icons/hi";
import { redirect } from "next/navigation";
import ScriptData from "@/components/ScriptData";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1
        className={`${pressStart2P.className} text-3xl mt-12 font-bold text-center text-gray-900 dark:text-gray-100`}
      >
        Scripts
      </h1>

      <div className="flex flex-col items-center justify-center  mt-12 gap-4">
        {scripts.map((script) => {
          const url = `/scripts/${script.filename}`;
          return <ScriptData key={script.filename} script={script} url={url} />;
        })}
      </div>
    </main>
  );
}
