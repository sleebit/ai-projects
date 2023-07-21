"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const addUserToSubscribersList = async () => {
    const { data } = await axios.post("/api/newsletter", { email });

    if (data.status) {
      toast({
        title: "Subscription Success",
        description:
          "We have recieved your subscription request, thank you ;-)",
      });
    } else {
      toast({
        title: "Subscription Error",
        description: data.message,
      });
    }
  };
  return (
    <footer className="flex justify-center px-4 text-gray-800  dark:text-white ">
      <div className="container px-6 py-6">
        <h1 className="text-lg font-bold text-center lg:text-2xl">
          Level up your AI game with our newsletter subscription!
        </h1>

        <div className="flex flex-col items-center justify-center gap-4 mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
          <Input
            type="email"
            onChange={({ target }) => setEmail(target.value)}
            className="w-auto"
            placeholder="Enter you co-ordinates (email)"
          />

          <Button onClick={addUserToSubscribersList}>Subscribe</Button>
        </div>
      </div>
    </footer>
  );
}
