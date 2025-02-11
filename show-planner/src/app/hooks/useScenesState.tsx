import { useState } from "react";
import { formatTime } from "../utils/timeFormatter";

interface Scene {
  id: number;
  name: string;
  duration: number; // durée en secondes
}

interface Transition {
  id: number;
  prevScene: string;
  nextScene: string;
  duration: number; // durée en secondes
}

const useScenesState = () => {
  const [scenes, setScenes] = useState<Scene[]>([
    { id: 1, name: "Scene 1", duration: 30 }, // 30 secondes
  ]);

  const [transitions, setTransitions] = useState<Transition[]>([]);

  const addScene = (id: number) => {
    const newSceneId = scenes.length + 1;
    const newScene: Scene = {
      id: newSceneId,
      name: `Scene ${newSceneId}`,
      duration: 30, // 30 secondes
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
    const newTransition: Transition = {
      id: newSceneId,
      prevScene: `Scene ${id}`,
      nextScene: `Scene ${newSceneId}`,
      duration: 10, // 10 secondes
    };

    setTransitions([...transitions, newTransition]);
  };

  const removeScene = (id: number) => {
    const updatedScenes = scenes.filter((scene) => scene.id !== id);
    setScenes(updatedScenes);

    // Supprimer les transitions liées à la scène supprimée
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
    const totalSeconds = transitions.reduce(
      (acc, transition) => acc + transition.duration,
      0
    );
    return formatTime(totalSeconds);
  };

  const calculateTotalSceneAndTransitionDuration = () => {
    const totalSceneSeconds = scenes.reduce(
      (acc, scene) => acc + scene.duration,
      0
    );
    const totalTransitionSeconds = transitions.reduce(
      (acc, transition) => acc + transition.duration,
      0
    );
    const totalSeconds = totalSceneSeconds + totalTransitionSeconds;

    return formatTime(totalSeconds);
  };

  const resetScenes = () => {
    setScenes([{ id: 1, name: "Scene 1", duration: 30 }]);
    setTransitions([]);
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
    calculateTotalSceneAndTransitionDuration,
    resetScenes,
  };
};

export default useScenesState;
