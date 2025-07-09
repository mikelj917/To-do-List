export const state = {
  isEditing: false,
  tasks: [],
}

export function setEditing(status) {
  state.isEditing = status;
}

export function isEditing() {
  return state.isEditing;
}