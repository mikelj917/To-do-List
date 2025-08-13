import { getElement } from "shared/utils";
import { handleAddTask } from "../controllers/handleAddTask";

export function setupAddTask() {
  getElement("#addTask-btn").addEventListener("click", handleAddTask);
}
