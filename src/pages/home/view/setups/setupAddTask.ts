import { getElement } from "shared/utils";
import { handleAddTask } from "../interactions/handleAddTask";

export function setupAddTask() {
  getElement("#addTask-btn")?.addEventListener("click", handleAddTask)
}
