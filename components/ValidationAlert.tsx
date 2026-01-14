interface ValidationAlertProps {
  missing: string[];
}

export default function ValidationAlert({ missing }: ValidationAlertProps) {
  if (missing.length === 0) return null;

  return (
    <div className="mt-4 p-4 bg-yellow-50 border border-yellow-300 rounded-xl">
      <p className="font-semibold text-yellow-800 mb-1">
        ⚠️ Logic Check Warning
      </p>
      <p className="text-sm text-yellow-700">
        The following elements are missing or incomplete:
      </p>
      <ul className="list-disc list-inside text-sm text-yellow-700 mt-1">
        {missing.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}