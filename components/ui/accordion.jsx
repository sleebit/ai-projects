"use client";

import { forwardRef } from "react";
import {
  Root,
  Item,
  Header,
  Trigger,
  Content,
} from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";

const Accordion = Root;

const AccordionItem = forwardRef(({ className, ...props }, ref) => (
  <Item ref={ref} className={cn("border-b", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = forwardRef(
  ({ className, children, ...props }, ref) => (
    <Header className="flex">
      <Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="h-4 w-4 shrink-0 text-zinc-500 transition-transform duration-200 dark:text-zinc-400" />
      </Trigger>
    </Header>
  )
);
AccordionTrigger.displayName = Trigger.displayName;

const AccordionContent = forwardRef(
  ({ className, children, ...props }, ref) => (
    <Content
      ref={ref}
      className={cn(
        "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className
      )}
      {...props}
    >
      <div className="pb-4 pt-0">{children}</div>
    </Content>
  )
);
AccordionContent.displayName = Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
