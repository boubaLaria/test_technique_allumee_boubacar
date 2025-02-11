import React from "react";

interface SceneRowProps {
  index: number;
  name: string;
  duration: number;
  onChange: (index: number, key: "name" | "duration", value: string | number) => void;
  onAdd: () => void;
  onRemove: () => void;
}

const SceneRow: React.FC<SceneRowProps> = ({
  index,
  name,
  duration,
  onChange,
  onAdd,
  onRemove,
}) => {
  return (
    <div className="flex items-center space-x-4 border-b py-3 px-4 bg-gray-100 rounded-lg shadow-sm w-full">
      <span className="w-16 text-center font-semibold text-gray-700">Scene {index + 1}</span>
      <input
        type="text"
        value={name}
        onChange={(e) => onChange(index, "name", e.target.value)}
        className="border border-gray-300 p-2 rounded-md flex-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        placeholder="Scene Name"
      />
      <input
        type="number"
        value={duration}
        onChange={(e) => onChange(index, "duration", Number(e.target.value))}
        className="border border-gray-300 p-2 rounded-md w-24 text-center focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
      <button
        onClick={onRemove}
        className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition-all duration-200 shadow-md"
      >
        -
      </button>
      <button
        onClick={onAdd}
        className="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition-all duration-200 shadow-md"
      >
        +
      </button>
    </div>
  );
};

export default SceneRow;
