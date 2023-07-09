"use client";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import ClimatePlayer from "@/components/ui/climate-player";

export default function Home() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Bring Your Own Keys <br className="hidden sm:inline" />
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Plug in your API keys and dive into our open-source AI Projects
          Playground. <br className="hidden sm:inline" />
          Explore, Experiment freely in an OPEN SOURCE manner.
        </p>
      </div>
      <div className="flex gap-4">
        <Link href="/playground" rel="noreferrer" className={buttonVariants()}>
          Go to Projects
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.twitter}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
      {/* <div className="absolute top-[270px] right-[765px] max-sm:unse max-sm:top-[50px] max-sm:right-[0px]"> */}
      <div className="relative xl:max-md:left-[25em] max-sm:left-0 max-sm:top-[0px]">
        <ClimatePlayer />
      </div>
    </section>
  );
}
