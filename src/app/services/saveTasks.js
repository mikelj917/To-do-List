import { state } from "../state/state.js";

export function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(state.tasks))
}