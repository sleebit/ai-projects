import { NextRequest, NextResponse } from "next/server";
import { YoutubeTranscript } from "../../../helpers/youtube-transcript";

export async function POST(request, response) {
  const data = await request.json();

  console.log("IP: ", NextRequest.ip);
  console.log("GEO: ", NextRequest.geo);

  try {
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
  } catch (e) {
    return NextResponse.json(
      {
        status: false,
        data: {},
        message: e.message,
      },
      { status: 200 }
    );
  }
}
