import { state } from "../state/index.js";

export function countTasks() {
  const pendingTasks = state.tasks.filter(task => !task.completed).length;
  document.getElementById("counter").innerHTML = pendingTasks;
}