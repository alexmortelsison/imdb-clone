import { ThemeProvider } from "next-themes";
import React from "react";

export default function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme="system" attribute={"class"}>
      <div className="dark:bg-slate-900 min-h-screen select-none duration-1000">
        {children}
      </div>
    </ThemeProvider>
  );
}
