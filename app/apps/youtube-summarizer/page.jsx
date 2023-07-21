"use client";
import { useToast } from "@/components/ui/use-toast";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";
import { getOpenaiApiKey } from "@/helpers";

import { Loader2Icon } from "lucide-react";

import { OpenAI } from "langchain/llms/openai";
import { loadSummarizationChain } from "langchain/chains";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import Typewriter from "typewriter-effect";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  youtubeLink: z.string().min(2, {
    message: "Youtube link is required",
  }),
  summaryType: z.string({
    required_error: "Summary type is required",
  }),
});

export default function Playground() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [summaries, setSummaries] = useState([]);
  let OPENAI_API_KEY;

  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  useEffect(() => {
    OPENAI_API_KEY = getOpenaiApiKey();
    process.env.OPENAI_API_KEY = OPENAI_API_KEY;
    console.log("OPENAI_API_KEY: ", OPENAI_API_KEY);
  }, []);

  const getQuickSummary = async ({ transcript }) => {
    console.log("OPENAI_API_KEY: ", OPENAI_API_KEY);
    if (transcript.length) {
      const model = new OpenAI({
        openAIApiKey: OPENAI_API_KEY,
        temperature: 0,
        modelName: "gpt-3.5-turbo",
      });
      const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 17000,
      });
      const docs = await textSplitter.createDocuments([transcript]);

      const chain = loadSummarizationChain(model, { type: "map_reduce" });
      const res = await chain.call({
        input_documents: docs,
      });

      return res.text;
    }
  };

  const getDetailedSummary = async ({ transcript }) => {
    console.log("Detailed summary");
    return "Detailed Summary";
  };

  async function onSubmit(data) {
    console.log(data);
    if (loading) {
      toast({
        title: "Loading",
        description: "Please wait...",
        status: "info",
      });
    } else {
      setLoading(true);
      const { data: apiResp } = await axios.post("/api/getYoutubeTranscripts", {
        url: data.youtubeLink,
      });

      if (apiResp.status) {
        const transcript = apiResp.data.transcript.map((e) => e.text).join(" ");
        let summary;
        if (data.summaryType == "quick") {
          summary = await getQuickSummary({ transcript });
        } else if (data.summaryType == "detailed") {
          summary = await getDetailedSummary({ transcript });
        }

        setSummaries([
          ...summaries,
          {
            ...apiResp.data,
            transcript,
            summary,
            summaryType: `${
              data.summaryType[0].toUpperCase() + data.summaryType.slice(1)
            } Summary`,
          },
        ]);
      } else {
        toast({
          title: "Error",
          description: "Something went wrong",
        });
      }
      setLoading(false);
    }
  }

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex w-full max-w-full flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-wider md:text-4xl mb-12">
          Youtube Summarizer <br className="hidden sm:inline" />
        </h1>

        <div className="w-full flex flex-col gap-8 items-center justify-center">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col md:flex-row space-y-6 md:space-x-6 md:-space-y-0"
            >
              <FormField
                control={form.control}
                name="summaryType"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-[220px]">
                        <SelectValue placeholder="Select summary type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Summary Type</SelectLabel>
                          <SelectItem value="quick" selected>
                            Quick Summary
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="youtubeLink"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex w-full max-w-lg items-center space-x-2">
                      <FormControl>
                        <Input placeholder="Enter your URL" {...field} />
                      </FormControl>
                      <Button type="submit">
                        <div
                          class="animate-spin mr-2"
                          viewBox="0 0 24 24"
                          style={{
                            display: loading ? "block" : "none",
                          }}
                        >
                          <Loader2Icon />
                        </div>
                        Summarize
                      </Button>
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
            <div className="flex flex-col items-center">
              <h2 className="text-2xl text-center font-semibold tracking-tight mt-4">
                Here lies your video summarizations.
              </h2>
              <Accordion
                type="single"
                collapsible
                className="w-[80vw] md:w-[35vw]"
              >
                {summaries.map((video, i) => (
                  <AccordionItem value={`video-${i}`}>
                    <AccordionTrigger>
                      {video.summaryType} - {video.videoTitle}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="w-[80vw] md:w-[35vw] text-justify m-auto leading-relaxed">
                        <Typewriter
                          options={{
                            delay: 15,
                          }}
                          onInit={(typewriter) => {
                            // setTypewriter(typewriter);
                            console.log(video);
                            typewriter.typeString(video.summary).start();
                          }}
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
}
