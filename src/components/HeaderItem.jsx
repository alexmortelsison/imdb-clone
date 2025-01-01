"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function HeaderItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        className={`hover:text-slate-800 font-semibold ${
          genre === param
            ? "underline underline-offset-8 decoration-4 decoration-slate-900"
            : ""
        }`}
        href={`/genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}