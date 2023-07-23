import { NextRequest, NextResponse, userAgent } from "next/server";
import axios from "axios";

import { YoutubeTranscript } from "../../../helpers/youtube-transcript";
import Analytics from "@/models/analytics";

export async function POST(req, res) {
  const data = await req.json();

  const ip = req.headers["x-real-ip"];
  const { data: geo } = await axios.get(
    `https://api.ipgeolocation.io/ipgeo?apiKey=9a5c785879944311bfd58fb20044c2c3&ip=${ip}`
  );
  const deviceInfo = userAgent(req);

  try {
    const transcript = await YoutubeTranscript.fetchTranscript(data.url);

    await Analytics.create({
      ip: ip || "",
      geo: geo || {},
      data: { ...data, videoTitle: transcript.videoTitle } || {},
      deviceInfo: deviceInfo || {},
    });
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
