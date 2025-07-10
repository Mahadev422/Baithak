import React, { useEffect, useState } from "react";
import { CgDarkMode } from "react-icons/cg";

const DarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    return (
      localStorage.theme === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <div className="p-1 flex gap-2 items-center rounded-2xl justify-between text-gray-700 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
      <CgDarkMode />
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isDark}
          onChange={toggleDarkMode}
          className="sr-only peer"
        />
        <div className="w-10 h-5 bg-gray-300 peer-checked:bg-blue-600 rounded-full peer transition-all duration-300"></div>
        <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-all duration-300 peer-checked:translate-x-5"></div>
      </label>
    </div>
  );
};

export default DarkMode;
