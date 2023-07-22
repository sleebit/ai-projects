"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
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
import { useState, useEffect } from "react";

const profileFormSchema = z.object({
  openAIKey: z.string({
    required_error: "Please enter your OpenAI API key.",
  }),
});

export function ProfileForm() {
  const form = useForm({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      openAIKey:
        typeof window !== "undefined"
          ? localStorage.getItem("OPENAI_API_KEY")
          : "",
    },
    mode: "onChange",
  });

  function onSubmit(data) {
    process.env.OPENAI_API_KEY = data.openAIKey;
    localStorage.setItem("OPENAI_API_KEY", data.openAIKey);
    toast({
      title: "Profile updated successfully.",
      description:
        "We have saved your API Key securely in your browser's localstorage. You check by opening your browser's console, and navigating to Application >> Localstorage tab.",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="openAIKey"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Open AI Key</FormLabel>
              <FormControl>
                <Input placeholder="sk-xxxxxxxxxxx" {...field} />
              </FormControl>
              <FormDescription>
                You can get your OpenAI API Keys here{" "}
                <Button
                  variant="link"
                  target="_blank"
                  href="https://platform.openai.com/account/api-keys"
                  className="pl-[1px] text-sm"
                >
                  here.
                </Button>
                <br />
                This never leaves your browser, and all the requests to the
                OpenAI API&#39;s will be made from your browser itself. We never
                take this key to our server&#39;s or store anywhere.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Update profile</Button>
      </form>
    </Form>
  );
}
