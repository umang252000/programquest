"use client";

import Link from "next/link";
import { ProgressBar, ValidationAlert, MultiSelect } from "@/components";
import { validateLFA } from "@/logic/lfaValidator";
import { stakeholderExamples } from "@/data/examples";
import { useLFA } from "@/context/LFAContext";

export default function Step3Stakeholders() {
  // ✅ Global LFA state
  const { data, updateField } = useLFA();

  // ✅ Validation logic unchanged
  const validation = validateLFA({ stakeholders: data.stakeholders });
  const isValid = data.stakeholders.length > 0;

  return (
    <main className="min-h-screen bg-gray-50 flex justify-center py-12">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow">

        <ProgressBar step={3} />

        <h2 className="text-2xl font-bold mb-2">
          Level 3: Map Key Stakeholders
        </h2>

        <p className="text-gray-600 mb-4">
          Identify actors across the system who are critical for success.
        </p>

        <MultiSelect
          options={stakeholderExamples}
          selected={data.stakeholders}
          onChange={(values) => updateField("stakeholders", values)}
        />

        <ValidationAlert missing={validation.missing} />

        <div className="flex justify-between mt-6">
          <Link
            href="/quest/step2-outcomes"
            className="text-gray-500 hover:underline"
          >
            ← Back
          </Link>

          {isValid ? (
            <Link
              href="/quest/step4-interventions"
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