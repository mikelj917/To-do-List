import { isEditing } from "../state/state.js";
import { filterBtnStates } from "./uiStates.js";
import { renderTasks } from "./render.js"

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