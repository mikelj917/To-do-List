import type { TaskType } from "pages/home/types";
import { taskElement } from "../components";
import { clearElement } from "shared/utils/dom/clearElement";

export function renderTasks(tasks: TaskType[], container: HTMLElement) {
  clearElement(container);
  appendTasksToList(tasks, container);
}

function appendTasksToList(tasks: TaskType[], listElement: HTMLElement) {
  tasks.forEach((task) => {
    const element = taskElement(task);
    listElement.appendChild(element);
  });
}
