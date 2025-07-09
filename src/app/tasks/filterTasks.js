import { state } from "../state/index.js";

export function getActualFilter() {
  const filterBtnsContainer = document.querySelector(".filters-container");
  const activeFilterBtn = filterBtnsContainer.querySelector('[data-active="true"]');
  return activeFilterBtn?.dataset.filter || "all";
}

export function filterTasks(filter = "all") {
  return state.tasks.filter(task => {
    if (filter === "all") return true;
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
  })
}