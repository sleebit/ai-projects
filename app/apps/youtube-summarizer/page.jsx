"use client";
import { useToast } from "@/components/ui/use-toast";
import { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useLoadingInterval from "@/lib/hooks/useLoadingInterval";

import { fetchViewersCount } from "@/helpers";

import { z } from "zod";
import axios from "axios";

import { Loader2Icon, ClipboardCheckIcon } from "lucide-react";

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
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";

import { Input } from "@/components/ui/input";
import { PromptTemplate } from "langchain/prompts";

const FormSchema = z.object({
  youtubeLink: z.string().min(2, {
    message: "Youtube link is required",
  }),
  summaryType: z.string({
    required_error: "Summary type is required",
  }),
});

export default function YoutubeSummarizer() {
  const pathname = usePathname();
  const { toast } = useToast();
  const [summaries, setSummaries] = useState([]);
  const [views, setViewersCount] = useState(0);
  const [loading, setLoading] = useState(false);

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

  const {
    reactiveTimeTaken,
    timeTaken,
    startLoadingInterval,
    stopLoadingInterval,
  } = useLoadingInterval(1250);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return minutes == 0
      ? `${remainingSeconds}s`
      : `${minutes}m ${remainingSeconds}s`;
  };

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      summaryType: "detailed",
    },
  });

  const copyToClipboard = (summary) => {
    navigator.clipboard.writeText(summary);
    toast({
      title: "SUCCESS",
      description: "Copied to clipboard",
    });
  };

  const getQuickSummary = async ({ transcript }) => {
    if (transcript.length) {
      const model = new OpenAI({
        temperature: 0,
        modelName: "gpt-3.5-turbo",
      });
      const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 17000,
      });
      const docs = await textSplitter.createDocuments([transcript]);

      try {
        const chain = loadSummarizationChain(model, { type: "map_reduce" });
        const res = await chain.call({
          input_documents: docs,
        });

        return {
          status: true,
          data: {
            summary: res.text,
          },
          message: "",
        };
      } catch (e) {
        console.log(e.response.data.error.message);
        return {
          status: false,
          data: {
            summary: null,
          },
          message: e.response.data.error.message || "Something went wrong",
        };
      }
    }
  };

  const getDetailedSummary = async ({ transcript, videoTitle }) => {
    if (transcript.length) {
      const model = new OpenAI({
        temperature: 0,
        modelName: "gpt-3.5-turbo",
      });
      const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 16000,
      });
      const docs = await textSplitter.createDocuments([transcript]);

      try {
        const prompt_template = `Write a detailed summary of the following text, dont loose any important context:


{text}
`;

        // Write summary of the following text, in points, and make sure to not loose any context from the following text:
        const final_combine_prompt_template = `Title: ${videoTitle}
        Transcript: {text}
        
        Please generate a concise summary of the provided YouTube video transcript in active voice. Focus on the key points, main ideas, and important details. The summary should be informative, well-structured, and capture the essence of the video's content.

        Summary:
        [Your generated summary will be placed here.]

        Key Points:
        1. 
        2. 
        3. 
          ...

        Main Ideas:
        1. 
        2. 
        3. 
          ...

        Important Details:
        1. 
        2. 
        3.         `;
        const PROMPT = new PromptTemplate({
          template: prompt_template,
          inputVariables: ["text"],
        });

        const FINAL_PROMPT = new PromptTemplate({
          template: final_combine_prompt_template,
          inputVariables: ["text"],
        });
        const chain = loadSummarizationChain(model, {
          type: "map_reduce",
          combineMapPrompt: PROMPT,
          combinePrompt: FINAL_PROMPT,
        });
        const res = await chain.call({
          input_documents: docs,
        });

        return {
          status: true,
          data: {
            summary: res.text,
          },
          message: "",
        };
      } catch (e) {
        console.log(e.response?.data?.error?.message || e.message);
        return {
          status: false,
          data: {
            summary: null,
          },
          message: e.response?.data?.error?.message || "Something went wrong",
        };
      }
    }
  };

  async function onSubmit(data) {
    gtag("event", "YOUTUBE_SUMMARIZATION", {
      data: data,
    });

    if (!process.env.OPENAI_API_KEY) {
      let a =
        process.env.NEXT_PUBLIC_KEY_PART_1 + process.env.NEXT_PUBLIC_KEY_PART_2;

      process.env.OPENAI_API_KEY = atob(a);
    }

    // if (!localStorage.getItem("OPENAI_API_KEY")) {
    if (!process.env.OPENAI_API_KEY) {
      toast({
        title: "OpenAI API key not found",
        description:
          "Please set your OpenAI API key in the profile section first.",
      });
      return;
    }

    // process.env.OPENAI_API_KEY = localStorage.getItem("OPENAI_API_KEY");

    if (loading) {
      toast({
        title: "Loading",
        description: "Please wait...",
        status: "info",
      });
    } else {
      setLoading(true);
      startLoadingInterval();

      const { data: apiResp } = await axios.post("/api/getYoutubeTranscripts", {
        url: data.youtubeLink,
        projectSlug: pathname?.split("/")[2],
      });

      if (apiResp.status) {
        const transcript = apiResp.data.transcript.map((e) => e.text).join(" ");
        let summaryResp;
        if (data.summaryType == "quick") {
          summaryResp = await getQuickSummary({
            transcript,
            videoTitle: apiResp.videoTitle,
          });
        } else if (data.summaryType == "detailed") {
          summaryResp = await getDetailedSummary({
            transcript,
            videoTitle: apiResp.videoTitle,
          });
        }

        if (summaryResp.status) {
          let finalSummaries = [
            {
              ...apiResp.data,
              ...summaryResp.data,
              transcript,
              summary: summaryResp.data.summary,
              summaryType: `${
                data.summaryType[0].toUpperCase() + data.summaryType.slice(1)
              } Summary`,
              timeTaken: formatTime(timeTaken.current),
            },
            ...summaries,
          ];

          let summariesForLocalStorage = [];
          finalSummaries.forEach((summary) => {
            summariesForLocalStorage.push({
              ...summary,
              transcript: "",
            });
          });

          localStorage.setItem(
            "summaries",
            JSON.stringify({ summaries: summariesForLocalStorage })
          );
          setSummaries(finalSummaries);
          const viewersCount = await fetchViewersCount({
            projectSlug: pathname.split("/")[2],
          });

          if (viewersCount) {
            setViewersCount(viewersCount);
          }
        } else {
          toast({
            title: "Error",
            description: summaryResp.message,
          });
        }

        setLoading(false);
        // setTimeout(() => {
        //   stopLoadingInterval();
        // }, 2000);
      } else {
        toast({
          title: "Error",
          description: apiResp.message.includes(
            "Impossible to retrieve Youtube video ID"
          )
            ? "This video does not seem to have transcripts. Try with some other video that have transcripts."
            : apiResp.message,
        });
      }
      setLoading(false);
    }
  }

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex w-full max-w-full flex-col items-start gap-2">
        <div className="flex items-center justify-start space-x-8 m-auto mb-12">
          <h1 className="text-3xl uppercase font-extrabold leading-tight tracking-wider md:text-4xl">
            Youtube Summarizer
          </h1>
          {views ? <Badge variant="">{views} people have used</Badge> : null}
        </div>

        <div className="w-full flex flex-col gap-8 items-center justify-center">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col md:flex-row items-center space-x-4 space-y-4 md:space-y-0"
            >
              <div className="flex flex-col md:flex-row space-y-4 md:space-x-6 md:space-y-0">
                <FormField
                  control={form.control}
                  name="summaryType"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-[260px] md:w-[180px]">
                          <SelectValue placeholder="Select summary type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Summary Type</SelectLabel>
                            <SelectItem value="quick">Quick Summary</SelectItem>
                            <SelectItem value="detailed">
                              Detailed Summary
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
                      {/* <div className="flex w-full max-w-lg items-center space-x-2"> */}
                      <FormControl>
                        <Input
                          placeholder="Enter any Youtube link"
                          {...field}
                        />
                      </FormControl>

                      {/* </div> */}

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit">
                <div
                  className="animate-spin"
                  viewBox="0 0 24 24"
                  style={{
                    display: loading ? "block" : "none",
                  }}
                >
                  <Loader2Icon />
                </div>
                <span className="whitespace-nowrap ml-2 mr-[4px]">
                  {loading ? "Summarizing in" : "Summarize"}
                </span>
                <span
                  className="whitespace-nowrap"
                  style={{
                    display: loading ? "block" : "none",
                  }}
                >
                  {formatTime(reactiveTimeTaken)}
                </span>
              </Button>
            </form>
            <div className="flex flex-col items-center">
              <Accordion
                type="single"
                collapsible
                className="w-[85vw] md:w-[48vw]"
              >
                {summaries.map((video, i) => (
                  <AccordionItem
                    value={`video-${i}`}
                    key={i}
                    className="bg-[#2d333f4d] p-4 my-[20px] mx-[auto]"
                  >
                    <AccordionTrigger>
                      <h2
                        className="text-lg font-semibold tracking-tight text-[#e1e7ee]"
                        dangerouslySetInnerHTML={{
                          __html: `&#8226; ${
                            video.videoTitle[0].toUpperCase() +
                            video.videoTitle.slice(1)
                          }`,
                        }}
                      ></h2>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="w-[74vw] md:w-[45vw] text-base text-left m-auto leading-relaxed text-[#d1d5db] whitespace-pre-wrap">
                        <Typewriter
                          options={{
                            delay: 15,
                          }}
                          onInit={(typewriter) => {
                            typewriter.typeString(video.summary).start();
                          }}
                        />
                        <div className="mt-4 flex space-x-4 justify-end">
                          <ClipboardCheckIcon
                            className="cursor-pointer"
                            onClick={() => copyToClipboard(video.summary)}
                          />
                          <div className="text-end">
                            Time taken: {video.timeTaken}
                          </div>
                        </div>
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
