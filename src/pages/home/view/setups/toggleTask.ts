import { getElement } from "shared";
import { handleToggleTask } from "../controllers/handleToggleTask";

export function setupToggleTask() {
  getElement("#tasks-list").addEventListener("click", handleToggleTask);
}
