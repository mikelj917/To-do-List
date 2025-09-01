import { isEditing, filter } from "pages/home/state";
import { filterBtnStates } from "../styles/filterBtn";

export function handleFilterBtns(
  filterBtns: NodeListOf<HTMLButtonElement>,
  btn: HTMLButtonElement,
) {
  if (isEditing()) return;
  filterBtns.forEach((btn) => {
    btn.dataset.active = "false";
    btn.className = filterBtnStates.idle;
  });

  btn.dataset.active = "true";
  btn.className = filterBtnStates.active;

  const currentFilter: string = btn.dataset.filter || "all";
  if (currentFilter === "all" || currentFilter === "completed" || currentFilter === "pending") {
    filter.set(currentFilter);
  }
}
