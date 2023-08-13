"use client";
import { useToast } from "@/components/ui/use-toast";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { fetchViewersCount } from "@/helpers";

import { nanoid } from "@/lib/utils";
import { Chat } from "@/components/chat/chat";
import { Badge } from "@/components/ui/badge";

export const runtime = "edge";

export default function ChatWithYoutube() {
  const pathname = usePathname();
  const { toast } = useToast();
  const [summaries, setSummaries] = useState([]);
  const [views, setViewersCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const id = nanoid();

  useEffect(() => {
    let oldSummaries = localStorage.getItem("summaries");

    if (oldSummaries) {
      oldSummaries = JSON.parse(oldSummaries).summaries;
      oldSummaries.map((summary) => {
        summary.transcript = "";
      });
      localStorage.setItem(
        "summaries",
        JSON.stringify({ summaries: oldSummaries })
      );
      setSummaries(oldSummaries);
    }

    (async () => {
      const viewersCount = await fetchViewersCount({
        projectSlug: pathname.split("/")[2],
      });

      if (viewersCount) {
        setViewersCount(viewersCount);
      }
    })();
  }, []);

  return (
    <section className="grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex w-full max-w-full flex-col items-start gap-2">
        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-start space-x-8 space-y-2 m-auto mb-12">
          <h1 className="text-3xl uppercase font-extrabold leading-tight tracking-wider md:text-4xl">
            ChatGPT Clone
          </h1>
          {views ? <Badge variant="">{views} people have used</Badge> : null}
        </div>

        <div className="w-full flex flex-col gap-8 items-center justify-center">
          <Chat id={id} />
        </div>
      </div>
    </section>
  );
}
