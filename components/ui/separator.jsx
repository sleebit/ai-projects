"use client";

import { forwardRef } from "react";
import { Root } from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

const Separator = forwardRef(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-zinc-200 dark:bg-zinc-800",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
);
Separator.displayName = Root.displayName;

export { Separator };
