interface MultiSelectProps {
  options: string[];
  selected: string[];
  onChange: (items: string[]) => void;
}

export default function MultiSelect({
  options,
  selected,
  onChange,
}: MultiSelectProps) {
  function toggle(option: string) {
    if (selected.includes(option)) {
      onChange(selected.filter((item) => item !== option));
    } else {
      onChange([...selected, option]);
    }
  }

  return (
    <div className="grid grid-cols-1 gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => toggle(option)}
          className={`text-left px-4 py-3 rounded-xl border transition ${
            selected.includes(option)
              ? "bg-indigo-600 text-white border-indigo-600"
              : "bg-white hover:bg-gray-50"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}