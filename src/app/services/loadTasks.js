import { state } from "../state/state.js";
import { renderTasks } from "../view/render.js";

export function displaySavedTasks() {
  const savedTasks = localStorage.getItem("tasks");
  state.tasks = savedTasks ? JSON.parse(savedTasks) : [];
  renderTasks()
}