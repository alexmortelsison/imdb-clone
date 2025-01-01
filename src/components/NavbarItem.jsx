import Link from "next/link";
import React from "react";

export default function NavbarItem({ title, address, Icon }) {
  return (
    <Link
      href={address}
      className="flex items-center gap-1 hover:text-yellow-600 hover:font-semibold"
    >
      <p>
        <Icon />
      </p>
      <p>{title}</p>
    </Link>
  );
}
