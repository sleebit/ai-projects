"use client";
import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

export function MainNav({ items }) {
  const { setTheme, theme } = useTheme();
  console.log("theme: ", theme);
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-end space-x-2">
        {/* <img className="h-6 w-6" id="nav-logo" /> */}
        {theme == "dark" ? (
          <Icons.logo.dark />
        ) : theme == "light" ? (
          <Icons.logo.light />
        ) : (
          <Icons.logo.dark />
        )}
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
