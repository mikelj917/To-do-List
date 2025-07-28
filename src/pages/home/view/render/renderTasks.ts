import { getFilter, tasks } from "pages/home/state";
import { filterTasks } from "pages/home/tasks";
import type { TaskType } from "pages/home/types";
import { getElement } from "shared/utils";
import { taskElement } from "../components";

export function renderTasks() {
  const filterdTasks = filterTasks(tasks, getFilter());
  const taskListEl = getElement<HTMLElement>("#tasks-list");

  if (taskListEl) {
    clearTaskList(taskListEl);
    appendTasksToList(filterdTasks, taskListEl)
  }
}

function clearTaskList(listElement: HTMLElement) {
  listElement.innerHTML = "";
}

function appendTasksToList(tasks: TaskType[], listElement: HTMLElement) {
  tasks.forEach((task) => {
    const element = taskElement(task)
    listElement.appendChild(element)
  })
}
