"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("You're on the list! We'll be in touch soon.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <input
        type="email"
        required
        placeholder="you@company.com"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status !== "idle" && status !== "loading") setStatus("idle");
        }}
        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        disabled={status === "loading"}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
      >
        {status === "loading" ? "Joining..." : "Join Waitlist"}
      </button>
      {status === "success" && (
        <p className="text-green-600 text-sm mt-1 sm:mt-0 sm:self-center">
          {message}
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm mt-1 sm:mt-0 sm:self-center">
          {message}
        </p>
      )}
    </form>
  );
}
