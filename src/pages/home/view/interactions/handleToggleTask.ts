import { isEditing, toggleTaskCompletion } from "pages/home/state";
import { renderTasks } from "../render/renderTasks";

export function handleToggleTask(event: Event) {
  if (isEditing()) return;

  const checkbox = (event.target as HTMLElement).closest(
    ".complete-checkbox",
  ) as HTMLInputElement | null;
  if (!checkbox) return;

  const id = checkbox.dataset.id;
  if (!id) return;

  toggleTaskCompletion(id, checkbox.checked);
  renderTasks();
}
