import { NextResponse } from "next/server";

export async function GET(request) {
  // Do whatever you want
  return NextResponse.json(
    [
      {
        name: "Youtube Video Summarizer",
        slug: "youtube-summarizer",
        description:
          "This project uses GPT-3 API's along with clever langchain tricks to summarize any given youtube video.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png",
        comingSoon: false,
      },
      {
        name: "Chat with Youtube",
        slug: "chat-with-youtube",
        description:
          "This project allows you to chat with in context of a given youtube video using GPT-3 API's.",
        image:
          "https://static.vecteezy.com/system/resources/previews/018/930/572/original/youtube-logo-youtube-icon-transparent-free-png.png",
        comingSoon: true,
      },
    ],
    { status: 200 }
  );
}
