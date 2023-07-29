import { NextRequest, NextResponse, userAgent } from "next/server";
import axios from "axios";

import { YoutubeTranscript } from "../../../helpers/youtube-transcript";

import { connect } from "@/config/dbConfig";
import Analytics from "@/models/analytics";

connect();

export async function POST(req, res) {
  const data = await req.json();

  const ip = req.headers.get("x-real-ip");
  let geo;
  try {
    const { data } = await axios.get(
      `https://api.ipgeolocation.io/ipgeo?apiKey=9a5c785879944311bfd58fb20044c2c3&ip=${ip}`
    );
    geo = data;
  } catch (e) {
    geo = {};
  }

  const deviceInfo = userAgent(req);

  try {
    const transcript = await YoutubeTranscript.fetchTranscript(data.url);

    await Analytics.create({
      projectSlug: data.projectSlug,
      data: { videoTitle: transcript.videoTitle, url: data.url },
      geo: {
        country: geo.country_name,
        city: geo.city,
        time_zone: geo.time_zone?.name,
      },
      deviceInfo: {
        device: deviceInfo.device || deviceInfo.cpu,
        os: deviceInfo.os,
      },
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
