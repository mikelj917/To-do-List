import { getEditing, setFilter } from "pages/home/state";
import { filterBtnStates } from "../styles/filterBtn";

export function handleFilterBtns(
  filterBtns: NodeListOf<HTMLButtonElement>,
  btn: HTMLButtonElement,
) {
  if (getEditing()) return;
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
}
