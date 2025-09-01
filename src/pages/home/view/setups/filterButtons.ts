import { getElementList } from "shared";
import { handleFilterBtns } from "../controllers/handleFilterButtons";

export function setupFilterBtns() {
  const filterBtns = getElementList<HTMLButtonElement>(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => handleFilterBtns(filterBtns, btn));
  });
}
