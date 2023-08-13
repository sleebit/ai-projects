import { cn } from "@/lib/utils";
import { ExternalLink } from "@/components/chat/external-link";

export function FooterText({ className, ...props }) {
  return (
    <p
      className={cn(
        "px-2 text-center text-xs leading-normal text-muted-foreground",
        className
      )}
      {...props}
    ></p>
  );
}
