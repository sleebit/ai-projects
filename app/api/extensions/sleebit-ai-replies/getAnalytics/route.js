import { NextResponse } from "next/server";
import { connect } from "@/config/dbConfig";
import Analytics from "@/models/analytics";

connect();

export async function GET(request) {
  const results = await Analytics.aggregate([
    { $match: { projectSlug: "sleebit-ai-replies" } },
    { $group: { _id: "$data.name", count: { $sum: 1 } } },
    { $project: { _id: 0, name: "$_id", count: 1 } },
  ]);

  let users = {};

  // Process the results
  results.forEach((user) => {
    console.log(`${user.name}: ${user.count}`);
    users[user.name] = user.count;
  });

  return NextResponse.json(
    { users },
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
