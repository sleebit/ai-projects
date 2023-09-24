import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json(
    {
      status: true,
      data: {
        isUpdateAvailable: true,
        updateText:
          "Ensure you have the GPT 3.5 tab opened in ChatGPT for this to work. Refresh with GPT 3.5 tab opened once, if login isn't working.",
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
