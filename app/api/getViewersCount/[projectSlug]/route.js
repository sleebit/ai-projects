import { NextRequest, NextResponse } from "next/server";

import { connect } from "@/config/dbConfig";
import Analytics from "@/models/analytics";

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
