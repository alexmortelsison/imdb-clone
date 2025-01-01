"use client";
import { useTheme } from "next-themes";
import React, { useState } from "react";
import { AiFillMoon, AiFillSun } from "react-icons/ai";

export default function DarkModeSwitch() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="hover:text-yellow-600 hover:cursor-pointer">
      {theme === "dark" ? (
        <AiFillSun onClick={() => setTheme("light")} />
      ) : (
        <AiFillMoon onClick={() => setTheme("dark")} />
      )}
    </div>
  );
}
