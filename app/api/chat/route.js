// import { kv } from "@vercel/kv";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";

// import { auth } from "@/auth";
import { nanoid } from "@/lib/utils";

export const runtime = "edge";

const configuration = new Configuration({
  apiKey: atob(
    process.env.NEXT_PUBLIC_KEY_PART_1 + process.env.NEXT_PUBLIC_KEY_PART_2
  ),
});

const openai = new OpenAIApi(configuration);

export async function POST(req) {
  const data = await req.json();
  const { messages, previewToken } = data;
  //   const userId = (await auth())?.user.id;

  //   if (!userId) {
  //     return new Response("Unauthorized", {
  //       status: 401,
  //     });
  //   }

  if (previewToken) {
    configuration.apiKey = previewToken;
  }

  const res = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages,
    temperature: 0.7,
    stream: true,
  });

  const stream = OpenAIStream(res, {
    async onCompletion(completion) {
      const title = data.messages[0].content.substring(0, 100);
      const id = data.id ?? nanoid();
      const createdAt = Date.now();
      const path = `/chat/${id}`;
      const payload = {
        id,
        title,
        userId: "sumit",
        createdAt,
        path,
        messages: [
          ...messages,
          {
            content: completion,
            role: "assistant",
          },
        ],
      };
      //   await kv.hmset(`chat:${id}`, payload);
      //   await kv.zadd(`user:chat:${userId}`, {
      //     score: createdAt,
      //     member: `chat:${id}`,
      //   });
    },
  });

  return new StreamingTextResponse(stream);
}
