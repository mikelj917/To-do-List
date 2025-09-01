import { getElement } from "shared";
import { handleDeleteTask } from "../controllers/handleDeleteTask";

export function setupDeleteTask() {
  getElement("#tasks-list").addEventListener("click", handleDeleteTask);
}
