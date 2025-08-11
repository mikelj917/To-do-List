import { getElement } from "shared/utils";
import { handleEditTask } from "../interactions/handleEditTask";

export function setupEditTask() {
  getElement("#tasks-list").addEventListener("click", handleEditTask);
}
