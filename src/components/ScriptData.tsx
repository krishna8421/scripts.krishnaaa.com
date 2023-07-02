"use client";

import { scripts } from "@/data/scripts";
import { IoCopyOutline } from "react-icons/io5";
import { HiOutlineDownload } from "react-icons/hi";
import { redirect } from "next/navigation";

interface ScriptDataProps {
  script: (typeof scripts)[0];
  url: string;
}

const ScriptData = ({ script, url }: ScriptDataProps) => {
  const copyCommand = (url: string) => {
    const fullUrl = `https://scripts.krishnaaa.com${url}`;

    navigator.clipboard.writeText(`curl -o- ${fullUrl} | bash`);
  };

  return (
    <div
      key={script.filename}
      className="flex items-center justify-center gap-2"
    >
      <h3 className="text-center text-gray-900 dark:text-gray-100 underline underline-offset-4">
        {script.filename}:
      </h3>
      <p className="text-center text-gray-900 dark:text-gray-100">
        {script.description}
      </p>
      <HiOutlineDownload
        className="cursor-pointer"
        onClick={() => redirect(url)}
      />
      <IoCopyOutline
        className="cursor-pointer"
        onClick={() => copyCommand(url)}
      />
    </div>
  );
};

export default ScriptData;
