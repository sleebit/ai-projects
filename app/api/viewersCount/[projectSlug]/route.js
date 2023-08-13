import { NextResponse, userAgent } from "next/server";

import { connect } from "@/config/dbConfig";
import Analytics from "@/models/analytics";
import { headers } from "next/headers";

connect();

export async function GET(req, { params }) {
  try {
    const data = await Analytics.find({
      projectSlug: params.projectSlug,
    }).count();
    return NextResponse.json(
      {
        status: true,
        data: {
          views: data,
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

export async function POST(req, { params }) {
  const data = req.json();

  const headersList = headers();
  const ip = headersList.get("x-real-ip");

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
    await Analytics.create({
      projectSlug: params.projectSlug || "",
      data: data.data || "",
      geo: {
        country: geo.country_name || "",
        city: geo.city || "",
        time_zone: geo.time_zone?.name || "",
      },
      deviceInfo: {
        device: deviceInfo.device || deviceInfo.cpu,
        os: deviceInfo.os || "",
      },
    });
  } catch (e) {}
}
