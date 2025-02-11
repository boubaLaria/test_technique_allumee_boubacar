import { useState } from "react";

interface Scene {
  id: number;
  name: string;
  duration: number;
}


const useScenesState = () => {
  const [scenes, setScenes] = useState<Scene[]>([
    { id: 1, name: "Scene 1", duration: 30 },
  ]);

  const addScene = () => {
    const newSceneId = scenes.length + 1;
    const newScene: Scene = { id: newSceneId, name: `Scene ${newSceneId}`, duration: 30 };
    setScenes([...scenes, newScene]);
  };

  return { scenes, addScene, setScenes };
};

export default useScenesState;
