import { isEditing, setFilter } from "pages/home/state";
import { filterBtnStates } from "../styles/filterBtn";
import { updateUI } from "../render/updateUI";

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

  const filter: string = btn.dataset.filter || "all";
  if (filter === "all" || filter === "completed" || filter === "pending") {
    setFilter(filter);
  }
  updateUI();
}
