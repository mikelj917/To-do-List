import { state } from "../state/index.js";

export function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(state.tasks))
}