import Link from "next/link";
import React, { ReactNode } from "react";

const GlobalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-gray-50 max-w-screen-sm min-h-screen mx-auto shadow-lg px-4">
      <header className="h-16 font-bold text-lg">
        <Link href="/">👀 ONEBITE BOOKS</Link>
      </header>
      <main className="mt-3">{children}</main>
      <footer className="py-24 text-gray-400">제작 @miss-gif</footer>
    </div>
  );
};

export default GlobalLayout;
