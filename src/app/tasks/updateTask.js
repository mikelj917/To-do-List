import { state } from "../state/state.js";

export function toggleTaskCompletion(id, completed) {
  const task = state.tasks.find(task => task.id === id);
  if (task) task.completed = completed
}