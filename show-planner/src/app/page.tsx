'use client'
import React from "react";
import SceneRow from "./components/SceneRow";

const MainPage: React.FC = () => {
  const scenes = [{ id: 1, name: "Scene 1", duration: 30 }, { id: 2, name: "Scene 2", duration: 30 }];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Show Planner</h1>
      {scenes.map((scene, index) => (
        <div key={scene.id}>
          <SceneRow
            index={index}
            name={scene.name}
            duration={scene.duration}

          />
          
        </div>
      ))}
    </div>
  );
};

export default MainPage;
