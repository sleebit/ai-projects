"use client";

import { forwardRef } from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import { Root, Item, Indicator } from "@radix-ui/react-radio-group";

import { cn } from "@/lib/utils";

const RadioGroup = forwardRef(({ className, ...props }, ref) => {
  return <Root className={cn("grid gap-2", className)} {...props} ref={ref} />;
});
RadioGroup.displayName = Root.displayName;

const RadioGroupItem = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-zinc-200 border-zinc-900 text-zinc-900 shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:border-zinc-50 dark:text-zinc-50 dark:focus-visible:ring-zinc-800",
        className
      )}
      {...props}
    >
      <Indicator className="flex items-center justify-center">
        <CheckIcon className="h-3.5 w-3.5 fill-primary" />
      </Indicator>
    </Item>
  );
});
RadioGroupItem.displayName = Item.displayName;

export { RadioGroup, RadioGroupItem };
