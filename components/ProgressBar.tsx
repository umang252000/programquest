interface ProgressBarProps {
  step: number;
}

export default function ProgressBar({ step }: ProgressBarProps) {
  const steps = 5;
  const progress = (step / steps) * 100;

  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm text-gray-600 mb-1">
        <span>Quest Progress</span>
        <span>Step {step} of {steps}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-indigo-600 h-2 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}