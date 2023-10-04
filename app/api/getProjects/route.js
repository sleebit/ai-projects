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
          "https://static.vecteezy.com/system/resources/previews/018/930/572/original/youtube-logo-youtube-icon-transparent-free-png.png",
        comingSoon: false,
      },
      {
        name: "ChatGPT Clone",
        slug: "chatgpt-clone",
        description: "This is a chatgpt clone using Next.js and ChatGPT API.",
        image:
          "https://www.edigitalagency.com.au/wp-content/uploads/chatgpt-logo-white-on-transparent-background-png.png",
        comingSoon: false,
      },
      {
        name: "Twitter Manager",
        slug: "twitter-manager",
        description: "This is a twitter manager extension.",
        image: "https://cdn-icons-png.flaticon.com/512/3488/3488290.png",
        comingSoon: true,
        externalLink:
          "https://chrome.google.com/webstore/detail/social-ai-assistant-grow/hhmnpeafdkdhgghnmbglliileijdhfgh",
      },
      {
        name: "Voice Cloner AI",
        slug: "voice-cloner-ai",
        description: "This is a voice cloner using Next.js and OpenAI API.",
        image:
          "https://app.resemble.ai/assets/resemble-d122f1da51a879a36af7999a188fdef23ad2ad525e7e3dbba9be97684676d0ac.png",
        comingSoon: true,
      },
    ],
    { status: 200 }
  );
}
