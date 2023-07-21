"use client";

import { useState } from "react";
// import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export function ThemeToggle() {
  // const { setTheme, theme } = useTheme();
  const pathname = usePathname();
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
      style={{
        display: pathname != "/" ? "none" : "block",
      }}
      onClick={handleRotIconsClick}
      rel="noreferrer"
      variant="default"
      className="motion-safe:animate-bounce"
      size="lg"
    >
      <span className="motion-safe:animate-bounce">PLAY WITH ME</span>
    </Button>
  );
}
