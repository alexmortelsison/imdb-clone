import React from "react";
import HeaderItem from "./HeaderItem";
import { Home, Info } from "lucide-react";
import DarkModeSwitch from "./DarkModeSwitch";
import Link from "next/link";

export default function Header() {
  return (
    <div className="max-w-6xl mx-auto p-4 flex justify-between">
      <div className="flex gap-2">
        <HeaderItem title="Home" address={"/"} Icon={Home} />
        <HeaderItem title="About" address={"/about"} Icon={Info} />
      </div>
      <div className="flex items-center">
        <DarkModeSwitch />
        <Link href={"/"} className="flex items-center">
          <span className="ml-2 font-bold text-lg bg-amber-600 px-2 rounded-lg">
            IMDB
          </span>
          <p className="font-semibold hidden md:inline">Clone</p>
        </Link>
      </div>
    </div>
  );
}
