import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json(
    {
      status: true,
      data: {
        isUpdateAvailable: true,
        updateText:
          "Click here to leave your valuable review on Chrome Web Store.",
        updateUrl:
          "https://chrome.google.com/webstore/detail/social-ai-assistant-grow/hhmnpeafdkdhgghnmbglliileijdhfgh",
      },
    },
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
