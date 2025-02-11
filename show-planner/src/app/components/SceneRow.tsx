import React from "react";

interface SceneRowProps {
  index: number;
  name: string;
  duration: number;

}

const SceneRow: React.FC<SceneRowProps> = ({
  index,
  name,
  duration,

}) => {
  return (
    <div className="flex items-center space-x-4 border-b py-3 px-4 bg-gray-100 rounded-lg shadow-sm w-full">
      <span className="w-16 text-center font-semibold text-gray-700">Scene {index + 1}</span>
      <input
        type="text"
        value={name}
        className="border border-gray-300 p-2 rounded-md flex-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        placeholder="Scene Name"
      />
      <input
        type="number"
        value={duration}
        className="border border-gray-300 p-2 rounded-md w-24 text-center focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
      <button
        className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition-all duration-200 shadow-md"
      >
        -
      </button>
      <button
        className="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition-all duration-200 shadow-md"
      >
        +
      </button>
    </div>
  );
};

export default SceneRow;
