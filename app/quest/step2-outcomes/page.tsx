"use client";

import Link from "next/link";
import { ProgressBar, ValidationAlert, MultiSelect } from "@/components";
import { outcomeExamples } from "@/data/examples";
import { validateLFA } from "@/logic/lfaValidator";
import { useLFA } from "@/context/LFAContext";

export default function Step2Outcomes() {
  // ✅ Global LFA state
  const { data, updateField } = useLFA();

  // ✅ Validation logic unchanged
  const validation = validateLFA({ outcomes: data.outcomes });
  const isValid = data.outcomes.length > 0;

  return (
    <main className="min-h-screen bg-gray-50 flex justify-center py-12">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow">

        <ProgressBar step={2} />

        <h2 className="text-2xl font-bold mb-2">
          Level 2: Select Target Outcomes
        </h2>

        <p className="text-gray-600 mb-4">
          Choose the student-level or system-level changes you aim to achieve.
        </p>

        <MultiSelect
          options={outcomeExamples}
          selected={data.outcomes}
          onChange={(values) => updateField("outcomes", values)}
        />

        <ValidationAlert missing={validation.missing} />

        <div className="flex justify-between mt-6">
          <Link
            href="/quest/step1-problem"
            className="text-gray-500 hover:underline"
          >
            ← Back
          </Link>

          {isValid ? (
            <Link
              href="/quest/step3-stakeholders"
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