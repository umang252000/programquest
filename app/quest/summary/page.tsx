"use client";

import Link from "next/link";
import { useLFA } from "@/context/LFAContext";
import { generateFeedback } from "@/logic/lfaFeedback";

/* ---------------- Helper Components ---------------- */

function Section({
  title,
  items,
  editHref,
}: {
  title: string;
  items: string[] | string;
  editHref: string;
}) {
  const list = Array.isArray(items) ? items : [items];

  return (
    <section className="mb-6 border rounded-xl p-5">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-lg">{title}</h3>

        {/* Edit link should NOT appear in PDF */}
        <Link
          href={editHref}
          className="text-sm text-indigo-600 hover:underline no-print"
        >
          Edit
        </Link>
      </div>

      {list.length > 0 && list[0] ? (
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {list.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400 italic">—</p>
      )}
    </section>
  );
}

/* ---------------- Page ---------------- */

export default function SummaryPage() {
  const { data } = useLFA();

  // Rule-based (AI-like) feedback
  const feedback = generateFeedback(data);

  // ✅ Browser-only PDF export (build-safe)
  async function exportPDF() {
    if (typeof window === "undefined") return;

    const element = document.getElementById("lfa-summary");
    if (!element) return;

    const html2pdf = (await import("html2pdf.js")).default;

    html2pdf()
      .set({
        margin: 0.5,
        filename: "ProgramQuest_LFA.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      })
      .from(element)
      .save();
  }

  return (
    <main className="min-h-screen bg-gray-100 flex justify-center py-12">
      <div className="w-full max-w-3xl bg-white p-10 rounded-2xl shadow">

        {/* ---------------- EXPORTABLE CONTENT ---------------- */}
        <div id="lfa-summary">

          <h1 className="text-3xl font-bold mb-4">
            🎉 ProgramQuest Summary
          </h1>

          <p className="text-gray-600 mb-8">
            Below is a review-ready Logical Framework generated through your
            ProgramQuest journey.
          </p>

          <Section
            title="Problem Statement"
            items={data.problem}
            editHref="/quest/step1-problem"
          />

          <Section
            title="Target Outcomes"
            items={data.outcomes}
            editHref="/quest/step2-outcomes"
          />

          <Section
            title="Key Stakeholders"
            items={data.stakeholders}
            editHref="/quest/step3-stakeholders"
          />

          <Section
            title="Interventions"
            items={data.interventions}
            editHref="/quest/step4-interventions"
          />

          <Section
            title="Success Indicators"
            items={data.indicators}
            editHref="/quest/step5-indicators"
          />

          {/* ---------------- FEEDBACK SECTION ---------------- */}
          <section className="mt-10 border-t pt-6">
            <h2 className="text-xl font-bold mb-4">
              🧠 Program Feedback
            </h2>

            <ul className="space-y-3">
              {feedback.map((item, index) => (
                <li
                  key={index}
                  className={`p-4 rounded-xl text-sm ${
                    item.type === "success"
                      ? "bg-green-50 text-green-800"
                      : item.type === "warning"
                      ? "bg-yellow-50 text-yellow-800"
                      : "bg-red-50 text-red-800"
                  }`}
                >
                  {item.message}
                </li>
              ))}
            </ul>
          </section>

        </div>

        {/* ---------------- ACTIONS (NOT IN PDF) ---------------- */}
        <div className="flex justify-between mt-10 no-print">
          <Link
            href="/"
            className="text-gray-500 hover:underline"
          >
            ← Start New Quest
          </Link>

          <button
            onClick={exportPDF}
            className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-indigo-700"
          >
            Export LFA (PDF)
          </button>
        </div>

      </div>

      {/* Hide UI-only elements from PDF */}
      <style jsx global>{`
        .no-print {
          display: block;
        }
        @media print {
          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </main>
  );
}