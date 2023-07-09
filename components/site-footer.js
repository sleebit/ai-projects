import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="flex justify-center px-4 text-gray-800  dark:text-white ">
      <div className="container px-6 py-6">
        <h1 className="text-lg font-bold text-center lg:text-2xl">
          Level up your AI game with our newsletter subscription!
        </h1>

        <div className="flex flex-col items-center justify-center gap-4 mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
          <Input
            type="email"
            className="w-auto"
            placeholder="Enter you co-ordinates (email)"
          />

          <Button>Subscribe</Button>
        </div>
      </div>
    </footer>
  );
}
