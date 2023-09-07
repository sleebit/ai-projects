import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json(
    {
      status: true,
      data: {
        isUpdateAvailable: false,
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
