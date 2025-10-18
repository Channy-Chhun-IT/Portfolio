import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import React from "react";

function DisplayMode() {
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    const storedMode = localStorage.getItem("mode");
    if (storedMode === "light") {
      setIsLightMode(true);
      document.documentElement.classList.remove("dark");
    } else {
      setIsLightMode(false);
      document.documentElement.classList.add("dark");
    }
  });

  function toggleIcon() {
    if (isLightMode) {
      document.documentElement.classList.add("dark");
      setIsLightMode(false);
      localStorage.setItem("mode", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      setIsLightMode(true);
      localStorage.setItem("mode", "light");
    }
  }

  return (
    <button
      onClick={toggleIcon}
      className="fixed max:sm-hidden top-5 right-5 rounded-full z-50 cursor-pointer duration-300"
    >
      {isLightMode ? (
        <Sun className="h-6 w-6 text-yellow-300 " />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
}
export default DisplayMode;
