import { useState } from "react";

interface Scene {
  id: number;
  name: string;
  duration: number;
}

interface Transition {
  id: number;
  prevScene: string;
  nextScene: string;
  duration: number;
}

const useScenesState = () => {
  const [scenes, setScenes] = useState<Scene[]>([
    { id: 1, name: "Scene 1", duration: 30 },
  ]);

  const [transitions, setTransitions] = useState<Transition[]>([]);

  const addScene = () => {
    const newSceneId = scenes.length + 1;
    const newScene: Scene = { id: newSceneId, name: `Scene ${newSceneId}`, duration: 30 };
    setScenes([...scenes, newScene]);
    setTransitions([...transitions, { id: newSceneId, prevScene: `Scene ${newSceneId - 1}`, nextScene: `Scene ${newSceneId}`, duration: 10 }]);
  };

  const removeScene = (id: number) => {
    const updatedScenes = scenes.filter(scene => scene.id !== id);
    setScenes(updatedScenes);
    setTransitions(transitions.filter(tr => tr.prevScene !== `Scene ${id}` && tr.nextScene !== `Scene ${id}`));
  };

  return { scenes, transitions, addScene, removeScene, setScenes, setTransitions };
};

export default useScenesState;
