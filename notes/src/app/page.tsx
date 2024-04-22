"use client";

import Image from "next/image";

import { JSONContent } from "novel";

import { defaultValue } from "./default-value";

import { useLocalStorage } from "@/hooks/useLocalStorage";

import Editor from "@/components/editor/advanced-editor";

const Home = () => {
  const [document, setDocument] = useLocalStorage<JSONContent>(
    "document",
    defaultValue
  );

  return (
    <main className="h-screen flex flex-col p-2 sm:p-8">
      <Image
        alt=""
        src="/images/bg.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-[url(/images/grid.svg)] bg-center [mask-image:linear-gradient(180deg,rgba(255,255,255,0))]"></div>
      <div className="relative mx-auto bg-background px-6 sm:px-8 py-8 shadow-xl ring-1 ring-foreground/5 w-full max-w-3xl flex-1 overflow-y-scroll disable-scrollbar">
        <Editor initialValue={document} onChange={setDocument} />
      </div>
    </main>
  );
};

export default Home;
