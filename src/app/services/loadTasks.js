import { state } from "../state/index.js";
import { renderTasks } from "../view/index.js";

export function displaySavedTasks() {
  const savedTasks = localStorage.getItem("tasks");
  state.tasks = savedTasks ? JSON.parse(savedTasks) : [];
  renderTasks()
}