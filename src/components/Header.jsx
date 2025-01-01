import React from "react";
import HeaderItem from "./HeaderItem";

export default function Header() {
  return (
    <div className="flex gap-4 justify-center bg-yellow-600 p-6">
      <HeaderItem title="Trending" param="fetchTrending" />
      <HeaderItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
