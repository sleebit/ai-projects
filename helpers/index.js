"use client";
import axios from "axios";
export function getOpenaiApiKey() {
  return localStorage.getItem("OPENAI_API_KEY") || null;
}

export async function fetchViewersCount({ projectSlug }) {
  const { data } = await axios.get(`/api/viewersCount/${projectSlug}`);

  if (data.status) {
    return data.data.views;
  } else {
    return "NaN";
  }
}

export async function updateViewersCount({ projectSlug, data }) {
  console.log();
  try {
    await axios.post(`/api/viewersCount/${projectSlug}`, {
      data,
    });
    return true;
  } catch (e) {
    console.log(e.message);
    return false;
  }
}
