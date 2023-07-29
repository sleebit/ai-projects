"use client";
import axios from "axios";
export function getOpenaiApiKey() {
  return localStorage.getItem("OPENAI_API_KEY") || null;
}

export async function fetchViewersCount({ projectSlug }) {
  const { data } = await axios.get(`/api/getViewersCount/${projectSlug}`);

  if (data.status) {
    return data.data.views;
  } else {
    return "NaN";
  }
}
