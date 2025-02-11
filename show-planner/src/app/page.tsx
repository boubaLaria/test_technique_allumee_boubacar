'use client'
import React from "react";
import SceneRow from "./components/SceneRow";
import TransitionRow from "./components/TransitionRow";
import useScenesState from "./hooks/useScenesState";

const MainPage: React.FC = () => {
  const { scenes, transitions, addScene, removeScene, setScenes, setTransitions } = useScenesState();

  const handleSceneChange = (index: number, key: "name" | "duration", value: string | number) => {
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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Show Planner</h1>
      {scenes.map((scene, index) => (
        <div key={scene.id}>
          <SceneRow
            index={index}
            name={scene.name}
            duration={scene.duration}
            onChange={handleSceneChange}
            onAdd={addScene}
            onRemove={() => removeScene(scene.id)}
          />
          {index < transitions.length && (
            <TransitionRow
              prevScene={transitions[index].prevScene}
              nextScene={transitions[index].nextScene}
              duration={transitions[index].duration}
              onChange={(value) => handleTransitionChange(index, value)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default MainPage;
