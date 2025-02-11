import { useState } from "react";
import { formatTime } from "../utils/timeFormatter";

interface Scene {
  id: number;
  name: string;
  duration: number; // duration in seconds
}

interface Transition {
  id: number;
  prevScene: string;
  nextScene: string;
  duration: number; // duration in seconds
}

const useScenesState = () => {
  const [scenes, setScenes] = useState<Scene[]>([
    { id: 1, name: "Scene 1", duration: 30 }, // 30 seconds
  ]);

  const [transitions, setTransitions] = useState<Transition[]>([]);

  const addScene = (id: number) => {
    const newSceneId = scenes.length + 1;
    const newScene: Scene = {
      id: newSceneId,
      name: `Scene ${newSceneId}`,
      duration: 30, // 30 seconds
    };

    // Trouver l'index de la scène cliquée
    const index = scenes.findIndex((scene) => scene.id === id);

    // Insérer la nouvelle scène après la scène cliquée
    const updatedScenes = [
      ...scenes.slice(0, index + 1),
      newScene, 
      ...scenes.slice(index + 1), 
    ];

    setScenes(updatedScenes);

    // Créer une transition pour la nouvelle scène
    const newTransition = {
      id: newSceneId,
      prevScene: `Scene ${id}`, 
      nextScene: `Scene ${newSceneId}`, 
      duration: 10, // 10 seconds
    };

    setTransitions([...transitions, newTransition]);
  };

  const removeScene = (id: number) => {
    const updatedScenes = scenes.filter((scene) => scene.id !== id);
    setScenes(updatedScenes);
    if (id === scenes.length - 1) {
      setTransitions(
        transitions.filter(
          (tr) =>
            tr.prevScene !== `Scene ${id - 1}` && tr.nextScene !== `Scene ${id}`
        )
      );
      return;
    }
    setTransitions(
      transitions.filter(
        (tr) => tr.prevScene !== `Scene ${id}` && tr.nextScene !== `Scene ${id}`
      )
    );
  };

  const calculateTotalSceneDuration = () => {
    const totalSeconds = scenes.reduce((acc, scene) => acc + scene.duration, 0);
    return formatTime(totalSeconds);
  };

  const calculateTotalTransitionDuration = () => {
    const totalSeconds = transitions.reduce((acc, transition) => acc + transition.duration, 0);
    return formatTime(totalSeconds);
  };

  return {
    scenes,
    transitions,
    addScene,
    removeScene,
    setScenes,
    setTransitions,
    calculateTotalSceneDuration,
    calculateTotalTransitionDuration,
  };
};

export default useScenesState;
