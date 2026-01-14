"use client";

import Link from "next/link";
import { ProgressBar, ValidationAlert, MultiSelect } from "@/components";
import { validateLFA } from "@/logic/lfaValidator";
import { interventionExamples } from "@/data/examples";
import { useLFA } from "@/context/LFAContext";

export default function Step4Interventions() {
  const { data, updateField } = useLFA();

  // ✅ Derive available interventions from selected outcomes
  const availableInterventions = data.outcomes.flatMap(
    (outcome) => interventionExamples[outcome] || []
  );

  // ✅ Dependency-aware validation (unchanged logic)
  const validation = validateLFA({
    outcomes: data.outcomes,
    interventions: data.interventions,
  });

  // ✅ Enforce dependency rule
  const canProceed =
    data.outcomes.length > 0 && data.interventions.length > 0;

  return (
    <main className="min-h-screen bg-gray-50 flex justify-center py-12">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow">

        <ProgressBar step={4} />

        <h2 className="text-2xl font-bold mb-2">
          Level 4: Choose Interventions
        </h2>

        <p className="text-gray-600 mb-4">
          Select interventions that logically contribute to your chosen outcomes.
        </p>

        <MultiSelect
          options={availableInterventions} // ✅ string[]
          selected={data.interventions}
          onChange={(values) => updateField("interventions", values)}
        />

        <ValidationAlert missing={validation.missing} />

        <div className="flex justify-between mt-6">
          <Link
            href="/quest/step3-stakeholders"
            className="text-gray-500 hover:underline"
          >
            ← Back
          </Link>

          {canProceed ? (
            <Link
              href="/quest/step5-indicators"
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