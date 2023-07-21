"use client";
export function getOpenaiApiKey() {
  return localStorage.getItem("OPENAI_API_KEY") || null;
}
