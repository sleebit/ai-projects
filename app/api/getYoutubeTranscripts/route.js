import { NextResponse } from "next/server";
import { YoutubeTranscript } from "../../../helpers/youtube-transcript";

export async function POST(request, response) {
  const data = await request.json();

  const transcript = await YoutubeTranscript.fetchTranscript(data.url);
  return NextResponse.json(
    {
      status: true,
      data: {
        ...transcript,
      },
      message: "",
    },
    { status: 200 }
  );
}
