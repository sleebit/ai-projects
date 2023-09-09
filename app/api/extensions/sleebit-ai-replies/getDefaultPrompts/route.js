import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json(
    [
      {
        id: "1",
        label: "👍 Like",
        prompt:
          "Imagine you're a Twitter user who came across a tweet you genuinely like. Craft a concise and friendly opinion (under 150 characters) to express your appreciation without using any hashtags or emojies. Make it sound like a real person who liked the tweet. Also use simple language, no overcomplicated vocabulary.",
      },
      {
        id: "2",
        label: "🤯 Mind-blown",
        prompt:
          "Pretend you stumbled upon a mind-blowing tweet. Craft a comment (under 150 characters) that conveys your astonishment and curiosity. Keep it authentic, as if you're genuinely amazed.",
      },
      {
        id: "3",
        label: "🙌 Support",
        prompt:
          "You've found a tweet that aligns with your beliefs and values. Write a supportive comment (under 150 characters) that encourages the conversation in a positive direction. Make it sound like a friendly endorsement.",
      },
      {
        id: "4",
        label: "❤️ Love",
        prompt:
          "Imagine you've just read a heartfelt and touching tweet that resonates with you on a deep level. Craft a warm and affectionate comment (under 150 characters) that expresses your love and appreciation. Make it sound like a genuine response from someone who truly cares.",
      },
      {
        id: "5",
        label: "🤔 Question",
        prompt:
          "Encountered a tweet that piqued your curiosity? Craft a brief, friendly question (under 150 characters) that invites the author and others to share more. Keep it natural, as if you're genuinely seeking information.",
      },
      {
        id: "6",
        label: "😂 Funny",
        prompt:
          "You've come across a humorous tweet. Create a funny and lighthearted comment (under 150 characters) that adds to the humor and encourages laughter. Make it seem like a real person sharing a joke.",
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
