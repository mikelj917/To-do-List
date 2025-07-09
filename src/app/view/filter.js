import { isEditing, filterBtnStates } from "../state/index.js";
import { renderTasks } from "./index.js"

export function handleFilter() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (isEditing()) return;
      filterBtns.forEach((btn) => {
        btn.dataset.active = false;
        btn.className = filterBtnStates.idle;
      });

      btn.dataset.active = true;
      btn.className = filterBtnStates.active;

      renderTasks();
    });
  })
}