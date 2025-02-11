export interface Scene {
  id: number;
  name: string;
  duration: number; // durée en secondes
}

export interface Transition {
  id: number;
  prevScene: string;
  nextScene: string;
  duration: number; // durée en secondes
}

