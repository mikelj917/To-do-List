import { getElement } from "shared/utils";
import { getFilteredTasks, countPendingTasks } from "../state";
import { renderTasks, renderCounter } from "../view/render";
import { saveTasks } from "../services/localstorage/saveTasks";

export function updateUI() {
  const filteredTasks = getFilteredTasks();
  const taskListElement = getElement<HTMLElement>("#tasks-list");
  renderTasks(filteredTasks, taskListElement);

  const pendingTasks = countPendingTasks();
  const CounterEl = getElement<HTMLElement>("#counter");
  renderCounter(pendingTasks, CounterEl);

  saveTasks();
}
