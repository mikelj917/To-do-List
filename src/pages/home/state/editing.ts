let isEditing: boolean = false;

export function startEditing() {
  isEditing = true;
}

export function stopEditing() {
  isEditing = false;
}

export function getEditing(): boolean {
  return isEditing;
}
