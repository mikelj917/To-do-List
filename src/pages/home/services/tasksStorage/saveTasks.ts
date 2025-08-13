import { tasks } from "pages/home/state";

export function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
