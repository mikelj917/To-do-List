let editingValue: boolean = false;

export function startEditing() {
  editingValue = true;
}

export function stopEditing() {
  editingValue = false;
}

export function isEditing(): boolean {
  return editingValue;
}
