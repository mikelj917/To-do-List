export const state = {
  isEditing: false,
  tasks: [],
}

export function startEditing() {
  state.isEditing = true;
}

export function stopEditing() {
  state.isEditing = false;
}

export function isEditing() {
  return state.isEditing;
}