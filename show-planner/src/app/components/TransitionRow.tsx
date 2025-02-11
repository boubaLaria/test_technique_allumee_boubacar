import React from "react";

interface TransitionRowProps {
  prevScene: string;
  nextScene: string;
  duration: number;
  onChange: (value: number) => void;
}

const TransitionRow: React.FC<TransitionRowProps> = ({
  prevScene,
  nextScene,
  duration,
  onChange,
}) => {
  return (
    <div className="flex items-center space-x-4 border-b py-3 px-4 bg-gray-200 rounded-lg shadow-sm ">
      <span className="flex-1 text-center font-semibold text-gray-700">
        TR {prevScene} → {nextScene}
      </span>
      <input
        type="number"
        value={duration}
        onChange={(e) => onChange(Number(e.target.value))}
        className="border border-gray-300 p-2 rounded-md w-24 text-center focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
    </div>
  );
};

export default TransitionRow;
