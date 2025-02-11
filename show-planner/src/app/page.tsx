'use client'
import React from "react";
import SceneRow from "./components/SceneRow";
import TransitionRow from "./components/TransitionRow";
import useScenesState from "./hooks/useScenesState";

const MainPage: React.FC = () => {
  const { scenes, addScene } = useScenesState();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Show Planner</h1>
      {scenes.map((scene, index) => (
        <div key={scene.id}>
          <SceneRow
            index={index}
            name={scene.name}
            duration={scene.duration}
            onAdd={addScene}
          />
          {index +1 < scenes.length && (
            <TransitionRow
              prevScene={scene.name}
              nextScene={scenes[index+1].name}
              duration={10}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default MainPage;
