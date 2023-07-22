import { NextRequest, NextResponse, userAgent } from "next/server";
import { connect } from "@/config/dbConfig";

import Subscribers from "@/models/subscribers";

connect();

export async function POST(req, res) {
  const data = await req.json();
  let response;

  const deviceInfo = userAgent(req);

  console.log("IP: ", NextRequest.ip);
  console.log("GEO: ", NextRequest.geo);
  console.log("DEVICE INFO: ", deviceInfo);

  try {
    const updatedData = await Subscribers.create({
      email: data.email,
    });
    response = {
      status: true,
      data: {
        ...updatedData,
      },
      message: "",
    };
  } catch (e) {
    response = {
      status: false,
      data: {
        error: e,
      },
      message: "We already have your email with us ;-)",
    };
  }

  return NextResponse.json(response, { status: 200 });
}

export async function GET(req, res) {
  try {
    const subscribersData = await Subscribers.find({});
    return NextResponse.json(
      {
        status: true,
        data: {
          ...subscribersData,
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
      { status: 500 }
    );
  }
}
