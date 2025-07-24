import { States } from "../types";

export const states: States = {
  isEditing: false,
  tasks: [],
};

export function startEditing() {
  states.isEditing = true;
}

export function stopEditing() {
  states.isEditing = false;
}

export function isEditing(): Boolean {
  return states.isEditing;
}
