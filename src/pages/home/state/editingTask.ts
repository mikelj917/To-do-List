import { signal } from "shared";

const editingValue = signal<boolean>(false);

export function startEditing() {
  editingValue.set(true);
}

export function stopEditing() {
  editingValue.set(false);
}

export function isEditing(): boolean {
  return editingValue.get();
}
