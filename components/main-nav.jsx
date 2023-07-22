"use client";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";

import darkLogo from "./assets/sleebit-logo-transparent-white.png";
import lightLogo from "./assets/sleebit-logo-transparent-black.png";

export function MainNav({ items }) {
  const { setTheme, theme } = useTheme();
  setTheme("dark");
  let [logo, setLogo] = useState();
  useEffect(() => {
    setLogo(
      theme == "dark"
        ? darkLogo.src
        : theme == "light"
        ? lightLogo.src
        : lightLogo.src
    );
  }, [theme]);

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-end space-x-2">
        <Image width={25} height={25} src={logo} alt="logo" />

        <span className="inline-block font-bold tracking-widest">
          {siteConfig.name.toUpperCase()}
        </span>
      </Link>
      {items?.length ? (
        <nav className="flex gap-6 max-sm:hidden">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  );
}
