import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json(
    [
      {
        id: "1",
        label: "👍 Like",
        prompt:
          "Imagine you're a Twitter user adding a comment under a tweet you agree with. Share your genuine agreement in under 150 characters without using any hashtags, dont use any complicated words, keep it casual.",
      },
      {
        id: "2",
        label: "🤯 Mind-blown",
        prompt:
          "Imagine you're a Twitter user adding a comment under a tweet you are absolutely mind blown with. Politely share your perspective in under 150 characters without using any hashtags, dont use any complicated words, keep it casual. Stay true to your thoughts.",
      },
      {
        id: "3",
        label: "🙌 Support",
        prompt:
          "Imagine you're a Twitter user adding a comment under a tweet you want to support. Offer your encouragement in under 150 characters without using any hashtags, dont use any complicated words, keep it casual. Be authentic in your response.",
      },
      {
        id: "4",
        label: "❤️ Love",
        prompt:
          "Imagine you're a Twitter user adding a comment under a tweet you absolutely adore. Pour your enthusiasm into 150 characters without using any hashtags, dont use any complicated words, keep it casual. Let your heartfelt response shine through.",
      },
      {
        id: "5",
        label: "🤔 Question",
        prompt:
          "Imagine you're a Twitter user adding a comment under a tweet you are curious about, and have a genuine question. Share your thoughts in under 150 characters without using any hashtags, dont use any complicated words, keep it casual. Express your genuine appreciation.",
      },
      {
        id: "6",
        label: "😂 Funny",
        prompt:
          "Imagine you're a Twitter user responding to a tweet that had you in stitches. Create a witty, humorous reply in under 150 characters without using any hashtags, dont use any complicated words, keep it casual. Let your sense of humor shine through!",
      },
    ],
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    }
  );
}
