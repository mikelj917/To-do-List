import { getElement } from "shared";
import { handleAddTask } from "../controllers/handleAddTask";

export function setupAddTask() {
  getElement("#addTask-btn").addEventListener("click", handleAddTask);
}
