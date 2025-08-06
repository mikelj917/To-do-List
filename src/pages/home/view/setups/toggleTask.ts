import { getElement } from "shared/utils";
import { handleToggleTask } from "../interactions/handleToggleTask";

export function setupToggleTask() {
  getElement("#tasks-list")?.addEventListener("click", handleToggleTask);
}
