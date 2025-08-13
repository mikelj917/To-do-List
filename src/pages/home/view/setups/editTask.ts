import { getElement } from "shared/utils";
import { handleEditTask } from "../controllers/handleEditTask";

export function setupEditTask() {
  getElement("#tasks-list").addEventListener("click", handleEditTask);
}
