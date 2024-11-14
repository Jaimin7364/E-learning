"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";

export const Themeswitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center mx-4">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="focus outline-none"
      >
        {theme === "dark" ? (
          <BiSun className="text-[#ffffff] text-2xl" />
        ) : (
          <BiMoon className="text-[#000000] text-2xl" />
        )}
      </button>
    </div>
  );
};
