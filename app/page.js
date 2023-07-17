"use client";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import ClimatePlayer from "@/components/ui/climate-player";

export default function Home() {
  return (
    <div className="z-in-150 relative">
      <div className="md:flex lg: lg:flex">
        <div className="relative w-fit m-auto py-[0px] px-[12px] mt-[40px] md:mt-auto lg:mt-auto">
          <h1
            className="text-3xl text-left font-extrabold leading-tight tracking-wider md:text-4xl ml-[10px]"
            style={{ textShadow: "1px 1px 2px #000" }}
          >
            Bring Your Own Keys <br className="hidden sm:inline" />
          </h1>
          <div className="flex max-w-[980px] flex-col items-start gap-2 m-auto mb-5 ml-[10px]">
            <p className="max-w-[700px] text-base text-muted-foreground">
              Plug in your API keys and dive into our open-source AI Projects
              Playground. <br className="hidden sm:inline" />
              Explore, Experiment freely in an OPEN SOURCE manner.
            </p>
          </div>
          <div className="flex gap-4 ml-[10px]">
            <Link
              href="/playground"
              rel="noreferrer"
              className={buttonVariants()}
            >
              Go to Projects
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.repo}
              className={buttonVariants({ variant: "outline" })}
            >
              GitHub
            </Link>
          </div>
        </div>
        <div className="md:mr-[4%] lg:mr-[4%]">
          <ClimatePlayer />
        </div>
      </div>
    </div>
  );
}
