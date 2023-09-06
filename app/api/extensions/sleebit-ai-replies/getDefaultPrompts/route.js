import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json(
    [
      {
        id: "1",
        label: "👍 Like",
        prompt:
          "Imagine you're a Twitter user adding a comment under a tweet you agree with. Share your genuine agreement in under 150 characters. Keep it casual, no need for complicated words or hashtags. Be yourself.",
      },
      {
        id: "2",
        label: "👎 Disagree",
        prompt:
          "Imagine you're a Twitter user adding a comment under a tweet you disagree with. Politely express your perspective in under 150 characters. Use everyday language, avoid complicated terms or hashtags. Stay true to your thoughts.",
      },
      {
        id: "3",
        label: "🙌 Support",
        prompt:
          "Imagine you're a Twitter user adding a comment under a tweet you want to support. Offer your encouragement in under 150 characters. Keep it casual, no need for complex language or hashtags. Be authentic in your response.",
      },
      {
        id: "4",
        label: "❤️ Love",
        prompt:
          "Imagine you're a Twitter user adding a comment under a tweet you absolutely adore. Pour your enthusiasm into 150 characters. Stay casual, avoid using complicated words or hashtags. Let your heartfelt response shine through.",
      },
      {
        id: "5",
        label: "💡 Insightful",
        prompt:
          "Imagine you're a Twitter user adding a comment under a tweet you found insightful. Share your thoughts in under 150 characters. Use simple language, skip the jargon and hashtags. Express your genuine appreciation.",
      },
      {
        id: "6",
        label: "😂 Funny",
        prompt:
          "Imagine you're a Twitter user adding a comment under a tweet you found hilarious. Craft a funny response in under 150 characters. Keep it light, skip the big words and hashtags. Let your humor shine!",
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
