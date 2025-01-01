import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import React from "react";
import NavbarItem from "./NavbarItem";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex max-w-6xl mx-auto justify-between p-4">
      <div className="flex gap-4">
        <NavbarItem title="Home" address={"/"} Icon={AiOutlineHome} />
        <NavbarItem
          title="About"
          address={"/about"}
          Icon={AiOutlineInfoCircle}
        />
      </div>
      <div>
        <Link href={"/"} className="flex gap-1 items-center">
          <span className="bg-yellow-600 rounded-lg px-2 text-lg font-bold">
            IMDB
          </span>
          <p>Clone</p>
        </Link>
      </div>
    </div>
  );
}
