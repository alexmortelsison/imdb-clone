import { ThumbsUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({ result }) {
  return (
    <div className="group cursor-pointer hover:shadow-slate-400 shadow-md rounded-lg border border-slate-400 m-2 tracking-tighter">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-70 transition-opacity duration-300"
        ></Image>
        <div className="p-2">
          <p className="line-clamp-2 text-sm">{result.overview}</p>
          <h2 className="text-lg font-bold truncate text-amber-600">
            {result.title || result.name}
          </h2>
          <p className="flex items-center">
            {result.release_date || result.first_air_date}
            <ThumbsUp size={20} className="mr-1 ml-3 text-amber-600" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
