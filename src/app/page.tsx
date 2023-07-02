import { scripts } from "@/data/scripts";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="text-3xl mt-12 font-bold text-center text-gray-900 dark:text-gray-100">
        Scripts
      </h1>

      <div className="flex flex-col items-center justify-center text-xs mt-12 gap-4">
        {scripts.map((script) => {
          const url = `/scripts/${script.filename}`;
          return (
            <Link
              href={url}
              key={script.filename}
              className="flex items-center justify-center gap-2 hover:underline"
            >
              <h3 className="text-center text-gray-900 dark:text-gray-100">
                {script.filename}:
              </h3>
              <p className="text-center text-gray-900 dark:text-gray-100">
                {script.description}
              </p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
