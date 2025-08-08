import { getElement } from "shared/utils";
import { handleDeleteTask } from "../interactions/handleDeleteTask";

export function setupDeleteTask() {
  getElement("#tasks-list").addEventListener("click", handleDeleteTask);
}