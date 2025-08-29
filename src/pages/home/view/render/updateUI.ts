import { getElement } from "shared/utils";
import { getFilteredTasks, countPendingTasks } from "pages/home/state";
import { renderTasks, renderCounter } from "../render";
import { saveTasks } from "pages/home/services/tasksStorage/saveTasks";

export function updateUI() {
  const filteredTasks = getFilteredTasks();
  const taskListElement = getElement<HTMLElement>("#tasks-list");
  renderTasks(filteredTasks, taskListElement);

  const pendingTasks = countPendingTasks();
  const CounterEl = getElement<HTMLElement>("#counter");
  renderCounter(pendingTasks, CounterEl);

  saveTasks();
}
