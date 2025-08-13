import { getElement } from "shared/utils";
import { handleDeleteTask } from "../controllers/handleDeleteTask";

export function setupDeleteTask() {
  getElement("#tasks-list").addEventListener("click", handleDeleteTask);
}
