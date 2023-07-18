"use client";
import { useToast } from "@/components/ui/use-toast";
import { useState, useEffect } from "react";

export default function Playground() {
  const { toast } = useToast();

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-wider  md:text-4xl">
          Youtube Summarizer <br className="hidden sm:inline" />
        </h1>
      </div>
    </section>
  );
}
