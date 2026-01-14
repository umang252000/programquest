"use client";

import Link from "next/link";
import { ProgressBar, ValidationAlert } from "@/components";
import { validateLFA } from "@/logic/lfaValidator";
import { useLFA } from "@/context/LFAContext";

export default function Step1Problem() {
  // ✅ Global state instead of local useState
  const { data, updateField } = useLFA();

  // ✅ Validation logic unchanged
  const validation = validateLFA({ problem: data.problem });
  const isValid = validation.results.problem;

  return (
    <main className="min-h-screen bg-gray-50 flex justify-center py-12">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow">

        <ProgressBar step={1} />

        <h2 className="text-2xl font-bold mb-2">
          Level 1: Define the Core Problem
        </h2>

        <p className="text-gray-600 mb-4">
          Describe the system-level education challenge you are trying to solve.
        </p>

        <textarea
          value={data.problem}
          onChange={(e) => updateField("problem", e.target.value)}
          placeholder="Example: Teachers lack real-time instructional support in multi-grade classrooms..."
          className="w-full border rounded-xl p-4 h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <ValidationAlert missing={validation.missing} />

        <div className="flex justify-end mt-6">
          {isValid ? (
            <Link
              href="/quest/step2-outcomes"
              className="bg-indigo-600 text-white px-5 py-2 rounded-xl font-semibold hover:bg-indigo-700"
            >
              Next →
            </Link>
          ) : (
            <button
              disabled
              className="bg-gray-400 text-white px-5 py-2 rounded-xl font-semibold cursor-not-allowed"
            >
              Next →
            </button>
          )}
        </div>

      </div>
    </main>
  );
}