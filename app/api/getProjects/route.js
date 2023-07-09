import { NextResponse } from "next/server";

export async function GET(request) {
  // Do whatever you want
  return NextResponse.json(
    [
      {
        name: "Chat with PDF",
        slug: "chat-with-pdf",
        description:
          "This project uses the GPT-3 embeddings APIs to generate embeddings from text of PDF, and then perform a cosine similarity between the embeddings and the user's question to generate a response.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png",
      },
      {
        name: "Sentiment Analysis ",
        slug: "sentiment-analysis",
        description:
          "This project uses GPT-3 API's along with clever langchain tricks to determine the sentiment of any given text.",
        image:
          "https://daxg39y63pxwu.cloudfront.net/images/blog/image-captioning-deep-learning-project/Image_Captioning_Deep_Learning_Projects.png",
      },
    ],
    { status: 200 }
  );
}
