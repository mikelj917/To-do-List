import { isEditing, toggleTaskCompletion } from "pages/home/state";
import { updateUI } from "../render";

export function handleToggleTask(event: Event) {
  if (isEditing()) return;

  const checkbox = (event.target as HTMLElement).closest(
    ".complete-checkbox",
  ) as HTMLInputElement;
  if (!checkbox) return;

  const id = checkbox.dataset.id ?? "";
  toggleTaskCompletion(id, checkbox.checked);

  updateUI();
}
