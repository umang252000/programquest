"use client";

import Link from "next/link";
import { ProgressBar, ValidationAlert, MultiSelect } from "@/components";
import { validateLFA } from "@/logic/lfaValidator";
import { indicatorExamples } from "@/data/examples";
import { useLFA } from "@/context/LFAContext";

export default function Step5Indicators() {
  // ✅ Global LFA state
  const { data, updateField } = useLFA();

  // ✅ Validation logic unchanged
  const validation = validateLFA({
    indicators: data.indicators,
  });

  const canFinish = data.indicators.length > 0;

  return (
    <main className="min-h-screen bg-gray-50 flex justify-center py-12">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow">

        <ProgressBar step={5} />

        <h2 className="text-2xl font-bold mb-2">
          Level 5: Define Success Indicators
        </h2>

        <p className="text-gray-600 mb-4">
          Select indicators that will help measure whether the desired
          outcomes are being achieved.
        </p>

        <MultiSelect
          options={indicatorExamples}
          selected={data.indicators}
          onChange={(values) => updateField("indicators", values)}
        />

        <ValidationAlert missing={validation.missing} />

        <div className="flex justify-between mt-6">
          <Link
            href="/quest/step4-interventions"
            className="text-gray-500 hover:underline"
          >
            ← Back
          </Link>

          {canFinish ? (
            <Link
              href="/quest/summary"
              className="bg-indigo-600 text-white px-5 py-2 rounded-xl font-semibold hover:bg-indigo-700"
            >
              Finish Quest →
            </Link>
          ) : (
            <button
              disabled
              className="bg-gray-400 text-white px-5 py-2 rounded-xl font-semibold cursor-not-allowed"
            >
              Finish Quest →
            </button>
          )}
        </div>

      </div>
    </main>
  );
}