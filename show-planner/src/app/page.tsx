"use client";
import React from "react";
import SceneRow from "./components/SceneRow";
import TransitionRow from "./components/TransitionRow";
import useScenesState from "./hooks/useScenesState";
import Breadcrumb from "./components/Breadcrumb";

const MainPage: React.FC = () => {
  const {
    scenes,
    transitions,
    addScene,
    removeScene,
    setScenes,
    setTransitions,
    calculateTotalSceneDuration,
    calculateTotalTransitionDuration,
    calculateTotalSceneAndTransitionDuration,
    resetScenes,
  } = useScenesState();

  const handleSceneChange = (
    index: number,
    key: "name" | "duration",
    value: string | number
  ) => {
    const updatedScenes = scenes.map((scene, i) =>
      i === index ? { ...scene, [key]: value } : scene
    );
    setScenes(updatedScenes);
  };

  const handleTransitionChange = (index: number, value: number) => {
    const updatedTransitions = transitions.map((transition, i) =>
      i === index ? { ...transition, duration: value } : transition
    );
    setTransitions(updatedTransitions);
  };

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark bg-gray-200 flex items-center justify-center min-h-screen">
      <div className="flex flex-col min-h-screen items-center justify-start w-full p-4 sm:p-6 lg:p-8">
        <Breadcrumb />
        <div className="rounded-sm border min-h-4/5 bg-white border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="container p-4">
            <h1 className="text-2xl font-bold mb-4">Show Planner</h1>
            {scenes.map((scene, index) => (
              <div key={scene.id}>
                <SceneRow
                  index={index}
                  name={scene.name}
                  duration={scene.duration} // keep duration in seconds
                  onChange={handleSceneChange}
                  onAdd={() => addScene(scene.id)}
                  onRemove={() => removeScene(scene.id)}
                />
                {index < transitions.length && (
                  <TransitionRow
                    prevScene={scene.name}
                    nextScene={scenes[index + 1].name}
                    duration={transitions[index].duration} // keep duration in seconds
                    onChange={(value) => handleTransitionChange(index, value)}
                  />
                )}
              </div>
            ))}
            <hr className="my-4" />
            <div className="flex justify-between items-center  mb-4">
              <h3 className="text-lg font-semibold">Scenography duration</h3>
              <span className="text-lg font-semibold">
                {calculateTotalSceneAndTransitionDuration()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Scenes duration</h3>
              <span className="text-lg font-semibold">
                {calculateTotalSceneDuration()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Transition Duration</h3>
              <span className="text-lg font-semibold">
                {calculateTotalTransitionDuration()}
              </span>
            </div>
            <div className="flex justify-between mt-4">
              <button onClick={resetScenes} className="bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-primary-2 transition-all duration-200 shadow-md">
                Reset
              </button>
              <button className="bg-blue-500 text-white  px-4 py-2 rounded-lg hover:bg-primary-2 transition-all duration-200 shadow-md">
                Load
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-primary-2 transition-all duration-200 shadow-md">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
