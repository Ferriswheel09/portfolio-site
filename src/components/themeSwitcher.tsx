// app/components/ThemeSwitcher.tsx
"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

import { MdDarkMode, MdLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  
  const isDark = theme === "dark";

  return (
    <div>
      <button
        aria-label={isDark ? "Light Mode" : "Dark Mode"}
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={`flex items-center justify-center p-2 rounded-md transition-colors duration-300 
          ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'} 
          hover:scale-105`}
      >
        {isDark ? <MdDarkMode /> : <MdLightMode />}
      </button>
    </div>
  );
}