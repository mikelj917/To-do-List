import { TaskType } from "../types";

let currentFilter: "all" | "completed" | "pending" = "all";

export function setFilter(filter: typeof currentFilter) {
  currentFilter = filter;
}

export function getFilter() {
  return currentFilter;
}

export function filterTasks(
  tasks: TaskType[],
  filter: "all" | "pending" | "completed" = "all",
) {
  return tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
  });
}
