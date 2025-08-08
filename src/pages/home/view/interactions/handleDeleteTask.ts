import { updateUI } from "pages/home/controller/updateUI";
import { isEditing, removeTaskById } from "pages/home/state";

export function handleDeleteTask(event: Event) {
  if (isEditing()) return;

  const deleteBtn = (event.target as HTMLElement).closest(
    ".delete-btn",
  ) as HTMLElement;
  if (!deleteBtn) return;

  const id = deleteBtn.dataset.id;
  if (!id) return;
  removeTaskById(id);

  updateUI();
}
