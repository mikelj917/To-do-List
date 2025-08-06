import { getAllElements } from "shared/utils";
import { handleFilterBtns } from "../interactions/handleFilterButtons";

export function setupFilterBtns() {
  const filterBtns = getAllElements<HTMLButtonElement>(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => handleFilterBtns(filterBtns, btn));
  })
}