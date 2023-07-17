"use client";

import { useState } from "react";
// import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export function ThemeToggle() {
  // const { setTheme, theme } = useTheme();
  const [index, setIndex] = useState(2);

  const handleRotIconsClick = () => {
    setIndex(index === 6 ? 1 : index + 1);
    if (index === 1) {
      document.querySelector("#mountains").classList.remove("storm");
      document.querySelector("#mountains").classList.remove("snow");
      document.querySelector("#mountains").classList.remove("clouds");
    } else if (index === 2) {
      document.querySelector("#mountains").classList.add("sunset");
    } else if (index === 3) {
      document.querySelector("#mountains").classList.remove("sunset");
      document.querySelector("#mountains").classList.add("moon");
    } else if (index === 4) {
      document.querySelector("#mountains").classList.add("clouds");
    } else if (index === 5) {
      document.querySelector("#mountains").classList.add("storm");
    } else if (index === 6) {
      document.querySelector("#mountains").classList.remove("moon");
      document.querySelector("#mountains").classList.remove("storm");
      document.querySelector("#mountains").classList.add("snow");
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      // onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      onClick={handleRotIconsClick}
    >
      <Icons.sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Icons.moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
