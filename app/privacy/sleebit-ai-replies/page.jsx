"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <section class="max-w-2xl px-6 py-8 mx-auto">
      <main class="mt-8">
        <p class="text-3xl text-gray-700 dark:text-gray-200">Privacy Policy</p>

        <p class="mt-4 leading-loose text-gray-600 dark:text-gray-300">
          Welcome to the Sleebit AI Replies Chrome Extension ("Extension")
          provided by Sleebit. We respect your privacy and are committed to
          protecting your data. This Privacy Policy explains how we collect,
          use, and protect the information collected when you use our Extension.
          By installing and using the Sleebit AI Replies Chrome Extension, you
          consent to the practices described in this Privacy Policy.
        </p>

        <hr class="my-6 border-gray-200 dark:border-gray-700" />

        <div>
          <div>
            <a class="inline-flex items-center text-blue-600 underline dark:text-blue-400 gap-x-2 underline-offset-4">
              <span>Information We Collect</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-5 h-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>

            <p class="mt-2 text-gray-500 dark:text-gray-400">
              We collect nothing but only users' Twitter handles for performance
              tracking purposes. This information is used solely for analytics
              and is not personally identifiable.
            </p>
          </div>

          <hr class="my-6 border-gray-200 dark:border-gray-700" />

          <div>
            <a class="inline-flex items-center text-blue-600 underline dark:text-blue-400 gap-x-2 underline-offset-4">
              <span>How We Use Your Information</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-5 h-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>

            <p class="mt-2 text-gray-500 dark:text-gray-400">
              The Twitter handles collected are used exclusively for monitoring
              and improving the performance of our Extension. We do not store
              any personal information, and the data is anonymized.
            </p>
          </div>

          <hr class="my-6 border-gray-200 dark:border-gray-700" />

          <div>
            <a class="inline-flex items-center text-blue-600 underline dark:text-blue-400 gap-x-2 underline-offset-4">
              <span>Your Choices</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-5 h-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>

            <p class="mt-2 text-gray-500 dark:text-gray-400">
              As we do not collect personal information, there are no choices
              related to personal data privacy for users of our Extension.
            </p>
          </div>

          <hr class="my-6 border-gray-200 dark:border-gray-700" />
        </div>
      </main>
    </section>
  );
}
