import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-xl text-center p-8 bg-white rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          ProgramQuest
        </h1>

        <p className="text-gray-600 mb-6">
          A gamified Logical Framework Builder that helps NGOs design
          clear, review-ready programs without expensive consultants.
        </p>

        <Link
          href="/quest/step1-problem"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
        >
          🚀 Start the Quest
        </Link>

        <p className="text-xs text-gray-400 mt-6">
          Built for the Innovation for Education Equity Hackathon
        </p>
      </div>
    </main>
  );
}