"use client";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import ClimatePlayer from "@/components/ui/climate-player";

export default function Home() {
  return (
    <>
      <div className="z-in-150 relative">
        <ClimatePlayer />
        <div className="absolute left-0 right-0 bottom-[90px]">
          <h1
            className="text-3xl text-center font-extrabold leading-tight tracking-wider md:text-4xl"
            style={{ textShadow: "1px 1px 2px #000" }}
          >
            Bring Your Own Keys <br className="hidden sm:inline" />
          </h1>
        </div>
      </div>

      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 ">
        <div className="flex max-w-[980px] flex-col items-start gap-2 m-auto">
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Plug in your API keys and dive into our open-source AI Projects
            Playground. <br className="hidden sm:inline" />
            Explore, Experiment freely in an OPEN SOURCE manner.
          </p>
        </div>
        <div className="flex gap-4 m-auto">
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
        {/* <div className="absolute top-[270px] right-[765px] max-sm:unse max-sm:top-[50px] max-sm:right-[0px]"> */}
        {/* <div className="relative xl:max-md:left-[25em] max-sm:left-0 max-sm:top-[0px]">
        
      </div> */}
      </section>
    </>
  );
}
