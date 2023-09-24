import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json(
    {
      status: true,
      data: {
        isUpdateAvailable: true,
        updateText:
          "Ensure you have the GPT 3.5 tab open in ChatGPT, then click refresh to log in.",
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
