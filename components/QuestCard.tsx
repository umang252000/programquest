"use client";

import Link from "next/link";

type QuestCardProps = {
  title: string;
  description: string;
  href: string;
  level?: number;
  disabled?: boolean;
};

export default function QuestCard({
  title,
  description,
  href,
  level,
  disabled = false,
}: QuestCardProps) {
  return (
    <div
      className={`rounded-2xl border p-6 shadow-sm transition ${
        disabled
          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
          : "bg-white hover:shadow-md"
      }`}
    >
      {level && (
        <span className="inline-block mb-2 text-xs font-semibold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
          Level {level}
        </span>
      )}

      <h3 className="text-xl font-bold mb-2">{title}</h3>

      <p className="text-sm mb-4">{description}</p>

      {!disabled ? (
        <Link
          href={href}
          className="inline-block text-indigo-600 font-semibold hover:underline"
        >
          Start →
        </Link>
      ) : (
        <span className="inline-block text-sm font-semibold">
          Locked 🔒
        </span>
      )}
    </div>
  );
}