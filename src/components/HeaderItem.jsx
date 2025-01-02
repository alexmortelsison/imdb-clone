import Link from "next/link";
import React from "react";

export default function HeaderItem({ title, address, Icon }) {
  return (
    <Link
      href={address}
      className="flex hover:text-amber-600 duration-200 hover:font-semibold text-sm items-center gap-1"
    >
      <p>
        <Icon />
      </p>
      <p className="hidden md:inline">{title}</p>
    </Link>
  );
}
