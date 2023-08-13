import { cn } from "@/lib/utils";

export function SidebarFooter({ children, className, ...props }) {
  return (
    <div
      className={cn("flex items-center justify-between p-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}
